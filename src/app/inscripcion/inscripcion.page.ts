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

  usuario : Usuario

  constructor(
    private firebase : FirestoreService,
    private interaction : InteractionService,
    private routerLink : Router,
    private auth : AuthService) { }

  ngOnInit() {
  }

  async agregarUsuario(
    nombre : IonInput,
    apellidos: IonInput,
    correo : IonInput,
    password : IonInput,
    confpassword : IonInput,
    dni : IonInput,
    fecha : IonInput,
    cell : IonInput){

      await this.interaction.presentLoading("Guardando usuario...");

      this.usuario ={
        id : dni.value.toString(),
        clave : password.value.toString(),
        fingerprint : "finger00x02s1d562",
        nombre : nombre.value.toString(),
        apellido : apellidos.value.toString(),
        f_nacimiento : fecha.value.toString(),
        num_cel : parseInt(cell.value.toString()),
        correo : correo.value.toString()
      }
      console.log(this.usuario);
      const inicio = this.auth.SignIn(this.usuario).catch((err)=>{
        this.interaction.mostrarAlertaSola("Inténtalo de nuevo", "Error al guardar usuario");
      });
      if(inicio){
          this.firebase.createUser(this.usuario,"usuarios",this.usuario.id).then(()=>{
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
