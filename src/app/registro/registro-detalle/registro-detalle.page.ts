import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'; //Me permite mirar los parametros de la URL
import { AlertController, ToastController } from '@ionic/angular';
import { RegistroService } from '../registro.service'; //Utilizamos nuevamente el servicio para acceder a metodos de la BD
import { Viaje } from './registro.model'; //Utilizamos el modelo viaje

@Component({
  selector: 'app-registro-detalle',
  templateUrl: './registro-detalle.page.html',
  styleUrls: ['./registro-detalle.page.scss'],
})
export class RegistroDetallePage implements OnInit {

  viaje : Viaje //Propiedad de tipo Viaje

  imagen : String

  constructor(
    private activatedRoute : ActivatedRoute,
    private registroService : RegistroService,
    public alertController: AlertController,
    public toastController : ToastController) { }

  ngOnInit() { //Inicio al cargar la pagina
    this.activatedRoute.paramMap.subscribe(paramMap =>{ //ParaMap: Obtener la URL (PARAMETROS) , Suscribe: Recorre todos los parametros
      //Redireccionamos
      const idRecibida = paramMap.get('registroID'); //Guardo en idRecibida el id obtenido
      this.viaje = this.registroService.getViaje(idRecibida);
      console.log(this.viaje);
    })
    if(this.viaje.tipo == 'Troncal'){
      this.imagen = 'assets/img/rojo.jpg';
    }else{
      this.imagen = 'assets/img/azul.jpg'
    }
    console.log(this.imagen);

  }

  async presentAlert(){
    const alert = await this.alertController.create({
      header : "Informar de error",
      message : "Un informe de error será enviado con los datos del viaje, ¿Deseas continuar?",
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
