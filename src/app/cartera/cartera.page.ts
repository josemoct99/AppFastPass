import { Component, OnInit } from '@angular/core';
import { CarteraService} from '../services/cartera.service';

@Component({
  selector: 'app-cartera',
  templateUrl: './cartera.page.html',
  styleUrls: ['./cartera.page.scss'],
})
export class CarteraPage implements OnInit {

  pagos = []
  logo : String
  constructor(private carteraService : CarteraService) {
    this.logo = "assets/img/logofastpass.png";
   }

  ngOnInit() {
    this.pagos = this.carteraService.getPagos();
  }

}
