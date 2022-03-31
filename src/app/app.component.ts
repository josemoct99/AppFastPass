import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { LoginPage } from './login/login.page';
import { AuthService } from './services/auth.service';
import { InteractionService } from './services/interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  public isLogged : boolean;

  constructor(
    private loginPage : LoginPage,
    private menu: MenuController,
    private auth : AuthService,
    private interaction : InteractionService
    ) {}

    ngOnInit() { //Inicio al cargar la pagina
      this.isLogged = this.loginPage.isLogged;
      if(this.isLogged){
        console.log("isLogged es True");
      }else{
        console.log("isLogged es False");
      }
  }

  verificar(){
    this.isLogged = this.loginPage.isLogged;
  }

  cambiarMenu(){
    this.menu.enable(false);
  }

  logOut(){
    this.cambiarMenu();
    this.auth.logOut();
    this.interaction.mostrarToast("Sesión cerrada correctamente");
  }

}
