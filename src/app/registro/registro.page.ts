import { Component, OnInit } from '@angular/core';
import {RegistroService} from './registro.service'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  viajes = []

  constructor(private registroService : RegistroService) { } //RegistroService solo es usado en la clase RegistroPage

  ngOnInit() {
    this.viajes = this.registroService.getViajes()
  }

}
