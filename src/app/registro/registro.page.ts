import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public viajes = [
    {
      id : "000001",
      servicio: "Troncal",
      fecha: "12/02/2021",
      bus: "H20"
    },
    {
      id : "000002",
      servicio: "Troncal",
      fecha: "12/02/2021",
      bus: "D20"
    },
    {
      id : "000003",
      servicio: "Zonal",
      fecha: "15/02/2021",
      bus: "107A"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
