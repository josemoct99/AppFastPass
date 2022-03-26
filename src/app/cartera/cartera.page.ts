import { Component, OnInit } from '@angular/core';
import { CarteraService } from './cartera.service';

@Component({
  selector: 'app-cartera',
  templateUrl: './cartera.page.html',
  styleUrls: ['./cartera.page.scss'],
})
export class CarteraPage implements OnInit {

  pagos = []

  constructor(private carteraService : CarteraService) { }

  ngOnInit() {
    this.pagos = this.carteraService.getPagos();
  }

}
