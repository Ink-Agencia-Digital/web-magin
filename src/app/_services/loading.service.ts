import { Injectable } from '@angular/core';
import {AlertController, LoadingController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isLoading = false;

  constructor(public loadingController: LoadingController, private alertController: AlertController) { }

  async loadingPresent(options: any = {}) {
    if (this.isLoading) {
      this.loadingDismiss();
      return false;
    }
    this.isLoading = true;
    return await this.loadingController.create(options).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async loadingDismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }

  showMessageCoins(coins) {
    this.alertController.create({
      header: "MAGIN's",
      message: `<div class="img-alert"><img src="../../../assets/home/money.png" alt="g-maps"></div>Sumaste +${coins} MAGIN's.`,
      buttons: ['Sigue Sumando!'],
      cssClass: 'coins'
    }).then(alert => alert.present());
  }
}
