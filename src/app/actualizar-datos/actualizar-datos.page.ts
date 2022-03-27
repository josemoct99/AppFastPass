import { Component, OnInit } from '@angular/core';
import { Usuario } from '../home/user-model';
import { UserService } from '../home/user.service';

@Component({
  selector: 'app-actualizar-datos',
  templateUrl: './actualizar-datos.page.html',
  styleUrls: ['./actualizar-datos.page.scss'],
})
export class ActualizarDatosPage implements OnInit {

  logo : String

  perfil : String

  usuario : Usuario

  constructor(private userService : UserService) {
    this.logo = "assets/img/logofastpass.png";
    this.perfil = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png";
   }

  ngOnInit() {
    this.usuario = this.userService.getUsuario();
  }

}
