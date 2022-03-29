import { Component, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { componentOnReady } from '@ionic/core';
import { Usuario } from '../home/user-model';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.page.html',
  styleUrls: ['./inscripcion.page.scss'],
})
export class InscripcionPage implements OnInit {

  usuario : Usuario

  constructor() { }

  ngOnInit() {
  }

  agregarUsuario(
    nombre : IonInput,
    apellidos: IonInput,
    correo : IonInput,
    password : IonInput,
    confpassword : IonInput,
    dni : IonInput,
    fecha : IonInput,
    cell : IonInput){

      this.usuario ={
        id : "00002",
        clave : password.value.toString(),
        fingerprint : "finger00x02s1d562",
        nombre : nombre.value.toString(),
        apellido : apellidos.value.toString(),
        f_nacimiento : fecha.value.toString(),
        num_cel : parseInt(cell.value.toString()),
        correo : correo.value.toString()
      }

      console.log(this.usuario);

  }

}
