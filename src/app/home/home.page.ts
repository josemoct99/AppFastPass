import { Component} from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  logo : String

  constructor(private menu: MenuController) {
    this.logo = "assets/img/logofastpass.png";
  }

}
