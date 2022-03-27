import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { CarteraService } from '../cartera.service';
import { Pago } from './cartera-model';

@Component({
  selector: 'app-cartera-detalle',
  templateUrl: './cartera-detalle.page.html',
  styleUrls: ['./cartera-detalle.page.scss'],
})
export class CarteraDetallePage implements OnInit {

  pago : Pago

  imagen : String


  constructor(
    private activatedRoute : ActivatedRoute,
    private carteraService : CarteraService,
    public alertController: AlertController,
    public toastController : ToastController) { }

  ngOnInit() {
      this.activatedRoute.paramMap.subscribe(paramMap =>{ //ParaMap: Obtener la URL (PARAMETROS) , Suscribe: Recorre todos los parametros
      //Redireccionamos 
      const idRecibida = paramMap.get('carteraID'); //Guardo en idRecibida el id obtenido
      this.pago = this.carteraService.getPago(idRecibida);
      console.log(this.pago);
    })

    switch(this.pago.banco){
      case "Nequi":
        this.imagen = "https://pbs.twimg.com/profile_images/872639434201681920/bhJs7rhP_400x400.jpg";
        break;
      case "Daviplata":
        this.imagen = "https://creativecomputers.com.co/wp-content/uploads/2017/09/daviplata.png";
        break;
      default:
        this.imagen = "https://media.istockphoto.com/vectors/wallet-linear-icon-modern-outline-wallet-logo-concept-on-white-from-vector-id1130930633?k=20&m=1130930633&s=170667a&w=0&h=xrzjFp9-TbXslRdB7blVEkRkvavgyYoItCAxkBfM9Sc=";
    }

  }

  async presentAlert(){
    const alert = await this.alertController.create({
      header : "Informar de error",
      message : "Un informe de error será enviado con los datos del pago, ¿Deseas continuar?",
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
            console.log("Se ha enviado el informe correctamente");
            this.presentToast();
          }
        }
      ]
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentToast(){
    const toast = await this.toastController.create({
      message : "Se ha enviado el informe correctamente",
      duration : 1500,
      position : "bottom"
    });
    toast.present();
  }

}
