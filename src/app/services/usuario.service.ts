import { Injectable } from '@angular/core';
import { Usuario } from '../home/user-model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario : Usuario

  constructor() { }

  setUsuario(usuario : Usuario){
    this.usuario = usuario;//
  }

  getUsuario(){
    return this.usuario;
  }
}
