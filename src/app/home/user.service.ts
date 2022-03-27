import { Injectable } from '@angular/core';
import { Usuario } from './user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public usuario : Usuario ={
    id : "00001",
    dni : "1031182625",
    clave : "zqed93id",
    nombre : "Jose",
    apellido : "Ricaurte",
    f_nacimiento : "03/10/1999",
    edad : 22,
    num_cel : 3125509851,
    correo : "jose.ricaurte99@gmail.com"
  }

  constructor() { }

   getUsuario(){
     return this.usuario;
   }

}
