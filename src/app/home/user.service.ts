import { Injectable } from '@angular/core';
import { Usuario } from './user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public usuario : Usuario ={
    id : "00001",
    clave : "miclave123",
    fingerprint : "z128sd8378f45wt8",
    nombre : "Jose",
    apellido : "Ricaurte",
    f_nacimiento : "03/10/1999",
    num_cel : 3125509851,
    correo : "jose.ricaurte99@gmail.com"
  }

  constructor() { }

   getUsuario(){
     return this.usuario;
   }

}
