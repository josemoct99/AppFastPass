import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Usuario } from '../home/user-model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private authFirebase : AngularFireAuth) { }

  logIn(correo : string, contra : string){
    return this.authFirebase.signInWithEmailAndPassword(correo, contra);
  }

  logOut(){
    this.authFirebase.signOut();
  }

  SignIn(usuario : Usuario){
    return this.authFirebase.createUserWithEmailAndPassword(usuario.correo, usuario.clave);
  }

}
