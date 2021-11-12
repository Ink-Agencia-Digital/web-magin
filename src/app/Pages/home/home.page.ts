import { ImgPrevPage } from './img-prev/img-prev.page';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareserviceService } from 'src/app/_services/shareservice.service';
import { PassObjectService } from 'src/app/_services/pass-object.service';
import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';
import * as shuffleArray from 'shuffle-array';
import { LoginService } from 'src/app/_services/login.service';
import { Image } from 'src/app/_model/Image';
import { forkJoin, Observable } from 'rxjs';
import { LoadingService } from 'src/app/_services/loading.service';
import { environment } from 'src/environments/environment';
import { ImagesService } from 'src/app/_services/images.service';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  imageSelect: Image;
  alert: any;
  urlP:string;
  user = 'user119572637';
  usertk = null;
  miactividad = 0;
  cursoActivo = null;
  actividadDiaria = null;
  leccionActiva = null;
  message_header: string;
  basePath = `${environment.HOST}`;
  splash = true;

  emotion = '';
  token: any;

  imageHome = null;
  imageDescription = null;
  magins = 0;
  notifications = [];

  constructor(
    private router: Router,
    private auth: AuthService,
    private share: ShareserviceService,
    private pObjecto: PassObjectService,
    private localN: LocalNotifications,
    private log: LoginService,
    private modelcontroller: ModalController,
    private loadingService: LoadingService,
    private imagesService: ImagesService,
    private alertController: AlertController,
    private iab: InAppBrowser,
  ) {
  }

  async ionViewWillEnter() {
    this.getToken();

    setTimeout(() => {
      this.splash = false;
    }, 5000);
  }

  ngOnInit() {
    this.imageSelect = new Image();
    this.getCurrentHour();
    this.getActiveLesson();
    this.getActiveCourse();
  }

  getNotification() {
    this.share.consultarNotificaciones(this.token).subscribe(resp => {
      resp.data.map( (notification: any) => {
        if(notification.id_profile === this.usertk.profile_id) {
          this.notifications.push(notification);
        }
      });
      this.localNotification();
    });
  }

  showMessageCoins() {
    this.alertController.create({
      header: "MAGIN's",
      message: '<div class="img-alert"><img src="../../../assets/home/money.png" alt="g-maps"></div>Suma más monedas oficiales por medio de la interacción y socialización diaria en la aplicación.',
      buttons: ['Sigue Sumando!'],
      cssClass: 'coins'
    }).then(alert => alert.present());
  }

  getImages() {
    this.imagesService.getImages(this.token).subscribe( (resp: any) => {
      this.imageHome = resp.data.find( (image: any) => image.type === 2 );
      if(this.imageHome) {
        this.imageDescription = this.imageHome.description;
        this.imageHome = `${this.basePath}${this.imageHome.url}`;
      }
    }, error => {
    });
  }

  getToken() {
    this.auth.gettokenLog().then(resp => {
      this.token = resp;
      this.loadData();
      this.getDataInfo();
    });
  }
  getDataInfo() {
    this.auth.gettokenLog().then( dt => {
      this.log.logdataInfData(dt).subscribe( infoUser => {
        this.usertk = infoUser;
        this.getMiactividad(this.usertk.id);
        this.obtenerMonedas();
        this.getNotification();
      });
    });
  }

  obtenerMonedas() {
    this.share.consultarMonedas(this.token, this.usertk.id).subscribe( resp => {
      if(resp.data.length > 0) {
        this.magins = resp.data[0].magin;
      }
    }, error => {
    });
  }

  getActiveCourse() {
    this.share.getcursoActivo().then( info => {
      this.cursoActivo = info;
    });
  }

  getActiveLesson() {
    this.share.getleccionActiva().then( resp => {
      this.leccionActiva = resp;
    });
  }

  getData(): Observable<any> {
    let activity = this.share.getaactividadesDiaria(this.token);
    return forkJoin([activity]);
  }


  async loadData() {
    this.loadingService.loadingPresent({spinner: "circles" });
    this.getData().subscribe(res => {
      this.actividadDiaria = res[0].data.activity;
      this.loadingService.loadingDismiss();
    }, err => {
      this.loadingService.loadingDismiss();
    });
  }

  getCurrentHour() {
    var today = new Date()
    var curHr = today.getHours()
    if (curHr < 12) {
      this.message_header = "Buenos días";
    } else if (curHr < 18) {
      this.message_header = "Buenas tardes";
    } else {
      this.message_header = "Buenas noches";
    }
  }

  retomarleccion(){
    this.pObjecto.setData(this.cursoActivo);
    this.router.navigate(['/users/entrena/vercurso/']);
  }

  localNotification() {
    shuffleArray(this.notifications).forEach((message: any, index: any) => {
      this.localN.schedule({
        id: index,
        title: message.titulo,
        text: message.mensaje,
        trigger: {
          in: 1 + (index * 2),
          unit: ELocalNotificationTriggerUnit.DAY,
        }
      });
    });
  }

  async imageView(imag: any) {
    const modal = await this.modelcontroller.create({
        component: ImgPrevPage,
        componentProps: {
          img: imag
        }
    });
    await modal.present();
  }

  getMiactividad(userid: any) {
    this.share.getActividadUsuario(userid, this.token).subscribe(info => {
      this.miactividad = info.data.length;
      this.getImages();
    });
  }

  diagnosticoRedirect(info: number, id: number) {
    let dataObj = {
      idprofile: info,
      idUser: id
    };
    this.pObjecto.setData(dataObj);
    this.router.navigate(['/users/perfil/diagnostico-inicio']);
  }

  recomedacionesRedirect(id: any){
    this.iab.create(`https://portalpagos.venkisports.com/?user=${id}`, '_system');
    /*let dataObj = {
      idUser: id
    };
    this.pObjecto.setData(dataObj);
    this.router.navigate(['/users/perfil/recomendaciones/']);*/
  }

  opinarSobreActividad(act: any) {
    let dataObj = {
      actividad: act
    };
    this.pObjecto.setData(dataObj);
    this.share.varDesafio.next('mostrar desafio');
    this.router.navigate(['/users/social']);
  }

  goTraing() {
    this.router.navigate(['/users/entrena']);
  }

  savefeeling(feeling: any) {
    this.emotion = feeling;
    this.loadingService.loadingPresent({spinner: "circles" });
    this.share.savefeeling(this.usertk.id, feeling, this.token).subscribe( resp => {
      this.loadingService.loadingDismiss();
    }, error => {
      this.loadingService.loadingDismiss();
    });
  }
}
