import { Component, OnInit } from '@angular/core';
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

export class LoginPage implements OnInit {

  public isLogged : boolean;

  constructor(private menu: MenuController) {
    this.menu.enable(false, 'custom');
   }

  ngOnInit() {
    if(1>0){
      this.isLogged = true;
      console.log("Entro a LOGIN");
    }
    
  }

}
