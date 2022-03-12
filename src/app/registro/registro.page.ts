import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public viajes = [
    {
      servicio: "Troncal",
      fecha: "12/02/2021",
      bus: "H20"
    },
    {
      servicio: "Troncal",
      fecha: "12/02/2021",
      bus: "D20"
    },
    {
      servicio: "Zonal",
      fecha: "15/02/2021",
      bus: "107A"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
