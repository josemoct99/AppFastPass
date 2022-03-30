import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  loading : any

  constructor(
    public alertController: AlertController,
    public toastController : ToastController,
    public loadingController : LoadingController) { }


  async mostrarToast(texto : string){
    const toast = await this.toastController.create({
      message : texto,
      duration : 1500,
      position : "bottom"
    });
    toast.present();
  }

  async mostrarAlertaDoble(texto : string, encabezado : string, manejador : string){
    const alert = await this.alertController.create({
      header : encabezado,
      message : texto,
      buttons : [
        {
          text : "No",
          handler : ()=>{
            console.log("Pulso no");
          }
        },
        {
          text : "Si",
          handler : ()=>{
            this.mostrarToast(manejador);
          }
        }
      ]
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async mostrarAlertaSola(texto : string, encabezado : string){
    const alert = await this.alertController.create({
      header : encabezado,
      message : texto,
      buttons : ["Ok"]
    });
    await alert.present();
    let result = await alert.onDidDismiss();
  }

  async presentLoading(mensaje : string) {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: mensaje
    });
    await this.loading.present();
  }

  async closeLoading() {
    await this.loading.dismiss();
  }

}
