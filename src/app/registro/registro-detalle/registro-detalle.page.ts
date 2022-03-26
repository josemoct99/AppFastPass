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
    if(this.viaje.servicio == 'Troncal'){
      this.imagen = 'https://www.transmilenio.gov.co/publicaciones/151309/ya-ruedan-por-la-ciudad-los-primeros-336-buses-nuevos-de-transmilenio/info/transmilenio/media/galeria290630.jpg';
    }else{
      this.imagen = 'https://www.kienyke.com/sites/default/files/2021-01/Transmilenio-buses-nuevos-a-gas.jpg'
    }
    console.log(this.imagen);

  }

  async presentAlert(){
    const alert = await this.alertController.create({
      header : "Informar de error",
      message : "Un informe de error sera enviado con los datos del viaje, deseas continuar?",
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
