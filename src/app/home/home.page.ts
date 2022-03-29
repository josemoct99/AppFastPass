import { Component, OnInit} from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';
import { Usuario } from './user-model';
import { UserService } from './user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  logo : String

  perfil  : String

  usuario : Usuario

    constructor(
    private menu: MenuController,
    private userService : UserService,
    private firebaseService :FirestoreService) {
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

  ngOnInit(): void {
      this.firebaseService.getUser<Usuario>("1031182625").subscribe( res=>{
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
