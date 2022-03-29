import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Usuario } from '../home/user-model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  createUser(usuario: Usuario, path : string, id : string){
    const collection = this.firestore.collection(path);
    return collection.doc(id).set(usuario);
  }

  getUser<tipo>(id : string){
    return this.firestore.collection<tipo>("usuarios").doc(id).valueChanges();
  }

}
