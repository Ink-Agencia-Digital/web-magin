import {EventEmitter, Injectable} from '@angular/core';
import {OneSignal, OSNotification, OSNotificationPayload} from '@ionic-native/onesignal/ngx';
import {Storage} from '@ionic/storage';
import {NavController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class PushService {

    mensajes: OSNotificationPayload[] = [];
    userId: string;
    pushListener = new EventEmitter<OSNotificationPayload>();

    constructor(
        private oneSignal: OneSignal,
        private storage: Storage,
        private navController: NavController) {
        this.cargarMensajes();
    }

    configuracionIncial() {
        this.oneSignal.startInit('92a3f182-0b68-4f59-9112-4023f7098334', '672643384150');

        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

        this.oneSignal.handleNotificationReceived().subscribe((noti) => {
            // do something when notification is received
            console.log('notificacion recibida', noti);
            //this.notificacionRecibida(noti);
        });

        this.oneSignal.handleNotificationOpened().subscribe(async (noti) => {
            // do something when a notification is opened
            console.log('notificacion abierta', noti);
            //await this.notificacionRecibida(noti.notification);
            if (noti.notification.payload.additionalData) {
                this.navController.navigateBack(noti.notification.payload.additionalData.url, {animated: true});
            }
        });

        // Obtener el userId del suscriptor
        this.oneSignal.getIds().then(info => {
            this.userId = info.userId;
            console.log(this.userId);
        });

        this.oneSignal.endInit();
    }

    async notificacionRecibida(noti: OSNotification) {
        await this.cargarMensajes();

        const payload = noti.payload;
        const pushId = this.mensajes.find(message => message.notificationID === payload.notificationID);

        if (pushId) {
            return;
        }

        this.mensajes.unshift(payload);
        this.pushListener.emit(payload);

        await this.gurdarMensaje();
    }

    async gurdarMensaje() {
        this.storage.set('mensajes', this.mensajes);
    }

    async cargarMensajes() {
        this.mensajes = await this.storage.get('mensajes') || [];
        return this.mensajes;
    }

    async obtenerMensajes() {
        await this.cargarMensajes();
        return [...this.mensajes];
    }

    async borrarMensajes() {
        await this.storage.remove('mensajes');
        this.mensajes = [];
        this.gurdarMensaje();
    }

    async borrarNotificacion(push: OSNotificationPayload) {
        this.mensajes = this.mensajes.filter(event => event.notificationID !== push.notificationID);
        this.gurdarMensaje();
    }
}
