import { Component, OnInit } from '@angular/core';
import { RegistrosService } from '../services/registros.service'; //Llamo al servicio que me da conexion con BD

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  viajes = []

  logo : String

  constructor(private registroService : RegistrosService) {

    this.logo = "assets/img/logofastpass.png";

   } //RegistroService solo sera usado en la clase RegistroPage

  ngOnInit() { //Inicio al cargar la pagina
    this.viajes = this.registroService.getViajes()
  }

}
