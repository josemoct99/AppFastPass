import { Component, OnDestroy, OnInit} from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';
import { Usuario } from './user-model';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { Viaje } from '../registro/registro-detalle/registro.model';
import { RegistrosService } from '../services/registros.service';
import { Subscription } from 'rxjs';
import { CarteraService } from '../services/cartera.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy{

  //private subscription : Subscription

  logo : String

  perfil  : String

  viajes : Viaje[] = []

  usuario : Usuario

  id : string

    constructor(
    private menu: MenuController,
    private servicioUsuario : UsuarioService,
    private firebaseService :FirestoreService,
    private route : ActivatedRoute,
    private servicioRegistros : RegistrosService,
    private servicioPagos : CarteraService) {
    this.logo = "assets/img/logofastpass.png";
    this.perfil = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png";
    console.log("Constructor LOGIN");
  }

  ngOnInit(): void {

    console.log("ngOnInit LOGIN");
    this.route.queryParams.subscribe(params=>{
      this.id = params.idUsuario;
    })

    const sub = this.firebaseService.getUser<Usuario>(this.id).subscribe( res=>{
    this.usuario = {
      id : res.id,
      clave : res.clave,
      fingerprint : res.fingerprint,
      nombre : res.nombre,
      apellido : res.apellido,
      f_nacimiento : res.f_nacimiento,
      num_cel : res.num_cel,
      correo : res.correo,
      billetera : res.billetera
    }
    this.servicioUsuario.setUsuario(this.usuario);
    this.servicioPagos.setBilltera(this.usuario.billetera);
  });

  //this.subscription.add(sub);
  console.log("Voy a getViajesUser");
  this.getViajes();
  }

  ngOnDestroy(): void {
    this.id = null;
    //this.subscription.unsubscribe();
  }

  getViajes(){
    if(this.id==null){
      return;
    }
    const sub = this.firebaseService.getViajesUser<Viaje>(this.id).subscribe(res =>{
      console.log('Hubo cambio de viajes en el usuario de id:', this.id);
      this.servicioRegistros.restartViajes();
      this.servicioPagos.restartPagos();
      res.forEach((doc) => {
        this.servicioRegistros.addViaje(doc['id'], doc['tipo'], doc['fecha'], doc['ruta']);
        this.servicioPagos.addPago(doc['id'],doc['fecha'],doc['valor'], doc['banco']);
      });
    })

    //this.subscription.add(sub);

  }



  getUser(){
    return this.usuario;
  }



}
