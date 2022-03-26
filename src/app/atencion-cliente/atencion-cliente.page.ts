import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atencion-cliente',
  templateUrl: './atencion-cliente.page.html',
  styleUrls: ['./atencion-cliente.page.scss'],
})
export class AtencionClientePage implements OnInit {

  logo : String

  constructor() {
    this.logo = "assets/img/logofastpass.png";
  }

  ngOnInit() {
  }

}
