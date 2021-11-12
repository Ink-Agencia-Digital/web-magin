import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareserviceService } from 'src/app/_services/shareservice.service';
import { PassObjectService } from 'src/app/_services/pass-object.service';
import { AlertController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { LoadingService } from 'src/app/_services/loading.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { AuthService } from 'src/app/_services/auth.service';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';

declare let cordova: any;

@Component({
  selector: 'app-cursos-categorias',
  templateUrl: './cursos-categorias.page.html',
  styleUrls: ['./cursos-categorias.page.scss'],
})
export class CursosCategoriasPage implements OnInit{

  autoClose = true;
  video: any;
  usertk = null;
  userIDName: any;
  coursetk = null;
  color:String;
  cursos: any[] = [];
  cursosUser: any[] = [];
  cursosU: any[] = [];
  msj = [];
  alert: any;
  cursoId: any[] =[];
  basePath = `${environment.HOST}`;
  token: any;

  constructor(
    private router: Router,
    private share: ShareserviceService,
    private pObjecto: PassObjectService,
    public alertController: AlertController,
    private sanitizer: DomSanitizer,
    private loadingService: LoadingService,
    private snackbar: MatSnackBar,
    private fileOpener: FileOpener,
    private diagnostic: Diagnostic,
    private transfer: FileTransfer,
    private auth: AuthService,
    private iab: InAppBrowser
    ) {
      this.getToken();
  }

  ngOnInit() {

  }
  getToken() {
    this.auth.gettokenLog().then(resp => {
      this.token = resp;
      this.loadPage();
    });
  }

  loadPage() {
    let informacion = this.pObjecto.getNavData();
    this.color=informacion.color;
    this.usertk = informacion.userInf;
    this.userIDName  = informacion.userInf.id;
    this.coursetk = informacion.infoCurso;
    if(this.coursetk.video) {
      this.video = this.sanitizer.bypassSecurityTrustResourceUrl(this.coursetk.video+"?title=0&byline=0&portrait=0&sidedock=0");
    } else {
      this.video = null;
    }
    this.getcursos(this.usertk.id, this.coursetk.id);
    this.share.getCursosUsuario(this.userIDName, this.token);
  }

  getcursos(userid: any, categoriaid: any) {
    this.loadingService.loadingPresent({spinner: "circles" });
    this.share.getCursosCategorias(categoriaid, userid, this.token).subscribe(dataCurso => {
      this.share.getCursosUsuario(userid, this.token).subscribe(data => {
        if(data.data.length > 0) {

          var cursosDisponibles = [];
          data.data.map( (curso: any) => {
            const find = dataCurso.find( (o: any) => o.id === curso.id);
            if(find) {
              cursosDisponibles.push(find);
            }
          });
          this.cursosUser = cursosDisponibles;
          this.cursosU = this.cursosUser;
        } else {
          this.mostrarmensaje('Actualmente no cuentas con cursos disponibles', 'Error', 'red-snackbar');
        }
        this.loadingService.loadingDismiss();
      }, error => {
        this.loadingService.loadingDismiss();
      });

    }, error => {
      this.loadingService.loadingDismiss();
    });
  }

  openChat() {
    this.router.navigate(['/users/chat']);
  }

  verCurso(info: any) {
    if (this.usertk.premium === 0) {
      this.alertConfirmarPago(this.usertk.id);
      return;
    }
    let dataObj = {
      infoCurso: info,
      userInf: this.usertk,
      course: this.coursetk,
      color: this.color,
    };
    this.pObjecto.setData(dataObj);
    this.router.navigate(['/users/entrena/vercurso']);
  }

  agregarCurso(curso: any) {
    if (this.usertk.premium === 0) {
      this.alertConfirmarPago(this.usertk.id);
      return;
    }
    this.share.getCursosUsuario(this.userIDName, this.token).subscribe(dataCurso =>{
      let temid  = dataCurso.data;
      temid.forEach(element => {
        if(element.id == curso.id){
          this.cursoId = element.id
        }
      });
      if(this.cursoId != curso.id || this.cursoId.length == 0){
        this.share.agregarCurso(this.usertk.id, curso.id, this.token).subscribe(data => {
          this.loadingService.showMessageCoins('50');
        });
      }else{
        this.alertDespuesTiempo();
      }
    });
  }

  async alertDespuesTiempo() {
    this.alert = await this.alertController.create({
      header: 'UPS!',
      subHeader:
        'Ya tienes el curso agregado',
      message:
        'No puedes agregar varias veces un mismo curso',
      buttons: ['Acepto'],
    });
    await this.alert.present();
  }

  descargarPDF(){
    if (this.usertk.premium === 0) {
      this.alertConfirmarPago(this.usertk.id);
      return;
    }
    if(this.coursetk.pdf) {
      var extension = this.coursetk.pdf.substr(this.coursetk.pdf.length - 4);
      if (extension == '.pdf') {
        const url = this.basePath+this.coursetk.pdf
        this.diagnostic.requestExternalStorageAuthorization().then(e =>{
          const fileTransfer: FileTransferObject = this.transfer.create();
              fileTransfer.download(url,  cordova.file.externalDataDirectory + "MAGIN.pdf").then((entry) => {
                this.fileOpener.open(entry.toURL(), 'application/pdf')
                .then(() => false)
                .catch(e => this.mostrarmensaje('Error descargando el archivo', 'Error', 'red-snackbar'));
              }, (error) => {
                this.mostrarmensaje('Error descargando el archivo', 'Error', 'red-snackbar')
              });
        }).catch(e => {
          this.mostrarmensaje('Error descargando el archivo', 'Error', 'red-snackbar')
        })
      } else {
        this.mostrarmensaje('El archivo no es un pdf', 'Error', 'red-snackbar');
      }
    } else {
      this.mostrarmensaje('La categoría no tiene mas información', 'Error', 'red-snackbar');
    }
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.cursosUser = this.cursosU.filter((item) => {
      return (item.name.indexOf(filtro) > -1);
    });
  }

  mostrarmensaje(message: string, action: string, type: string) {
    this.snackbar.open(message, action, {
      duration: 2000,
      panelClass: [type],
    });
  }

  async alertConfirmarPago(id: number) {
    this.alert = await this.alertController.create({
      header: '¡Suscribete al contenido Premium!',
      message: 'Adquiere aquí tu plan de entrenamiento',
      buttons: [
        {
          text: 'Confirmar',
          cssClass: 'confirm-category',
          handler: () => {
            this.iab.create(`https://portalpagos.venkisports.com/?user=${id}`, '_system');
            this.alert.dismiss(true);
            this.router.navigate(['/users/entrena']);
          }
        },
        {
          text: 'Cancelar',
          cssClass: 'cancel-category',
          handler: () => {
            this.alert.dismiss(false);
            this.router.navigate(['/users/entrena']);
          }
        }
      ],
    });
    await this.alert.present();
  }

}
