import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'; //Me permite mirar los parametros de la URL
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

  constructor(private activatedRoute : ActivatedRoute, private registroService : RegistroService) { }

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


}
