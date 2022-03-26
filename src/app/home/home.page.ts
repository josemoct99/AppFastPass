import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  logo : String

  constructor() {

    this.logo = "assets/img/logofastpass.png";
  }

}
