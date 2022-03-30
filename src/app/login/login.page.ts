import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { InteractionService } from '../services/interaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

@Injectable({
  providedIn: 'root'
})

export class LoginPage {

  public credenciales = {
    correo : null,
    contra : null
  }

  public isLogged : boolean;

  constructor(
    private menu: MenuController,
    private auth : AuthService,
    private interaction : InteractionService,
    private router : Router) {
  }


  cambiarMenu(){
    this.menu.enable(true);
  }

  async logIn(){
    await this.interaction.presentLoading("Ingresando...")
    const res = await this.auth.logIn(this.credenciales.correo, this.credenciales.contra).catch( err =>{
      this.interaction.closeLoading();
      this.interaction.mostrarAlertaSola("Correo o contraseña invalidos", "Error al iniciar sesión");
    });

    if(res){
      this.interaction.closeLoading();
      this.interaction.mostrarToast("Ingreso con éxito");
      this.cambiarMenu();
      this.router.navigate(['home']);
    }

  }

}
