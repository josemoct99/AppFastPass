import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'; //Me permite mirar los parametros de la URL
import { AlertController, ToastController } from '@ionic/angular';
import { InteractionService } from 'src/app/services/interaction.service';
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
    public toastController : ToastController,
    public interaction : InteractionService) { }

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

  presentAlert(){
    this.interaction.mostrarAlertaDoble(
      "Informar de error",
      "Un informe de error será enviado con los datos del viaje, ¿Deseas continuar?"
      ,"Se ha enviado el informe correctamente");
  }
}
