import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/_services/auth.service';
import { ShareserviceService } from 'src/app/_services/shareservice.service';

@Component({
  selector: 'app-info-inicio',
  templateUrl: './info-inicio.page.html',
  styleUrls: ['./info-inicio.page.scss'],
})
export class InfoInicioPage implements OnInit {

  @ViewChild('slider', {read: ElementRef}) slider: ElementRef;

  oculto = false;

  courses = [];
  token: any;

  constructor(
    private share: ShareserviceService,
    private modalCRTL: ModalController,
    public alertController: AlertController,
    private renderer: Renderer2,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.getToken();
  }

  getToken() {
    this.auth.gettokenLog().then(resp => {
      this.token = resp;
      this.getcourses();
    });
  }

  verMas(){
    const parent: HTMLElement = document.getElementById('p1');
    this.renderer.setStyle(parent, 'display', 'none');

    const parent2: HTMLElement = document.getElementById('p2');
    this.renderer.setStyle(parent2, 'display', 'block');

    this.oculto = true;
  }

  vermenos(){
    const parent: HTMLElement = document.getElementById('p1');
    this.renderer.setStyle(parent, 'display', 'block');

    const parent2: HTMLElement = document.getElementById('p2');
    this.renderer.setStyle(parent2, 'display', 'none');

    this.oculto = false;
  }


  close(){
    this.modalCRTL.dismiss();
  }

  getcourses() {
    this.share.getCategorias(this.token).subscribe(info => {
      this.courses = info.data;
    });
  }
}
