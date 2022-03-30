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

  }

  ngOnInit(): void {
      this.firebaseService.getUser<Usuario>("1031182625").subscribe( res=>{
      this.usuario = {
        id : res.id,
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
