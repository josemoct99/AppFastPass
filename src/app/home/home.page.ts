import { Component, OnInit} from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';
import { Usuario } from './user-model';
import { UserService } from './user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  logo : String

  perfil  : String

  usuario : Usuario

  id : string

    constructor(
    private menu: MenuController,
    private userService : UserService,
    private firebaseService :FirestoreService,
    private route : ActivatedRoute) {
    this.logo = "assets/img/logofastpass.png";
    this.perfil = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png";
    console.log("Constructor LOGIN");
  }

  ngOnInit(): void {

    console.log("ngOnInit LOGIN");
    this.route.queryParams.subscribe(params=>{
      this.id = params.idUsuario;
    })
    console.log("HOME: ",this.id);

    this.firebaseService.getUser<Usuario>(this.id).subscribe( res=>{
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
