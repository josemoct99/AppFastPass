import { Component, OnInit} from '@angular/core';
import { MenuController } from '@ionic/angular';
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

  constructor(private menu: MenuController, private userService : UserService) {
    this.logo = "assets/img/logofastpass.png";
    this.perfil = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png";
  }

  ngOnInit(): void {
    this.usuario = this.userService.getUsuario();
  }

}
