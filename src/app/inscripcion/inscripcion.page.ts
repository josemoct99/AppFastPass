import { Component, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { componentOnReady } from '@ionic/core';
import { Usuario } from '../home/user-model';
import { FirestoreService } from '../services/firestore.service';
import { InteractionService } from '../services/interaction.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.page.html',
  styleUrls: ['./inscripcion.page.scss'],
})
export class InscripcionPage implements OnInit {

  contra : String

  usuario : Usuario ={
    nombre : null,
    id : null
  }

  constructor(
    private firebase : FirestoreService,
    private interaction : InteractionService,
    private routerLink : Router,
    private auth : AuthService) { }

  ngOnInit() {
  }

  camposLlenos(){
    if(this.usuario.id !=null && this.usuario.apellido !=null && this.usuario.clave !=null && 
      this.usuario.correo !=null && this.usuario.f_nacimiento !=null && this.usuario.fingerprint !=null &&
      this.usuario.nombre !=null && this.usuario.num_cel !=null){
      return true;
    }
    console.log(this.usuario);
    return false;
  }

  async agregarUsuario(){
    this.usuario.fingerprint = (Math.floor(Math.random() * 10000) + 1).toString();

    if(!this.camposLlenos()){
      this.interaction.mostrarToast("Complete todos los campos correctamente");
      return;
    }

    if(this.usuario.clave != this.contra){
      this.interaction.mostrarToast("Las constrasenias no coinciden");
      console.log(this.usuario.clave ,"-->", this.contra);
      return;
    }

    if(this.usuario.clave.length<7){
      this.interaction.mostrarToast("La contrasenia debe tener mas de 6 caracteres");
      return;
    }
      await this.interaction.presentLoading("Guardando usuario...");
      const inicio = await this.auth.SignIn(this.usuario).catch((err)=>{
        this.interaction.mostrarAlertaSola("Inténtalo de nuevo", "Error al guardar usuario");
      });
      
      if(inicio){
          this.firebase.createUser(this.usuario,"usuarios",inicio.user.uid).then(()=>{
          this.interaction.closeLoading();
          this.interaction.mostrarAlertaSola("Ya puedes iniciar sesión", "Usuario guardado con éxito");
          this.routerLink.navigate(['/login']);
        }).catch((err)=>{
          this.interaction.closeLoading();
          this.interaction.mostrarAlertaSola("Inténtalo de nuevo", "Error al guardar usuario");
        });
      }



  }

}
