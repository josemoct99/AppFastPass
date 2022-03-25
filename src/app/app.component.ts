import { Component, OnInit } from '@angular/core';
import { LoginPage } from './login/login.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  public isLogged : boolean;

  constructor(private loginPage : LoginPage) {}

    ngOnInit() { //Inicio al cargar la pagina
      this.isLogged = this.loginPage.isLogged;
      if(this.isLogged){
        console.log("isLogged es True");
      }else{
        console.log("isLogged es False");
      }
  }
  
}
