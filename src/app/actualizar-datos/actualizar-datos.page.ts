import { Component, OnInit } from '@angular/core';
import { Usuario } from '../home/user-model';
import { UserService } from '../home/user.service';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-actualizar-datos',
  templateUrl: './actualizar-datos.page.html',
  styleUrls: ['./actualizar-datos.page.scss'],
})
export class ActualizarDatosPage implements OnInit {

  logo : String

  perfil : String

  usuario : Usuario

  constructor(
    private userService : UserService,
    private firebase : FirestoreService) {
    this.logo = "assets/img/logofastpass.png";
    this.perfil = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png";

    this.usuario = {
      id : "1031182625",
      clave : "1031182625",
      fingerprint : "1031182625",
      nombre : "1031182625",
      apellido : "1031182625",
      f_nacimiento : "1031182625",
      num_cel : 2,
      correo : "1031182625",
    }
   }

  ngOnInit() {
    this.firebase.getUser<Usuario>("1031182625").subscribe( res=>{
      this.usuario = {
        id : "1031182625",
        clave : res.clave,
        fingerprint : res.fingerprint,
        nombre : res.nombre,
        apellido : res.apellido,
        f_nacimiento : res.f_nacimiento,
        num_cel : res.num_cel,
        correo : res.correo
      }
    });
  }

}
