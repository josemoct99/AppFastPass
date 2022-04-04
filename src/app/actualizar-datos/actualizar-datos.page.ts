import { Component, OnInit } from '@angular/core';
import { Usuario } from '../home/user-model';
import { UserService } from '../home/user.service';
import { FirestoreService } from '../services/firestore.service';
import { HomePageModule } from '../home/home.module';

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
    private firebase : FirestoreService,
    private home : HomePageModule) {
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
    //this.usuario = this.home.();
  }

}
