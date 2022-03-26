import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

@Injectable({
  providedIn: 'root'
})

export class LoginPage {

  public isLogged : boolean;

  constructor(private menu: MenuController) {
  }

  cambiarMenu(){
    this.menu.enable(true);
  }

}
