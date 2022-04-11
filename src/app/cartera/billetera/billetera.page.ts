import { Component, OnInit } from '@angular/core';
import { CarteraService } from 'src/app/services/cartera.service';
import { Billetera } from './billetera.model';

@Component({
  selector: 'app-billetera',
  templateUrl: './billetera.page.html',
  styleUrls: ['./billetera.page.scss'],
})
export class BilleteraPage implements OnInit {

  billetera : Billetera

  constructor(private servicioBilletera : CarteraService) {
    this.billetera ={
      id : "no encontrado",
      banco : "no encontado",
      saldo : 0,
      datos : "no encontrados"
    }
   }

  ngOnInit() {
    this.billetera = this.servicioBilletera.getBilletera();
  }

}
