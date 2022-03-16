import { Component, OnInit } from '@angular/core';
import {RegistroService} from './registro.service'; //Llamo al servicio que me da conexion con BD

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  viajes = []

  constructor(private registroService : RegistroService) { } //RegistroService solo sera usado en la clase RegistroPage

  ngOnInit() { //Inicio al cargar la pagina
    this.viajes = this.registroService.getViajes()
  }

}
