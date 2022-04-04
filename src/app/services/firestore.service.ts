import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Usuario } from '../home/user-model';
import { collection, getFirestore, getDocs } from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class FirestoreService{

  constructor(private firestore: AngularFirestore) { }

  createUser(usuario: Usuario, path : string, id : string){
    try{
      const collection =this.firestore.collection(path).doc(id).set(usuario);
      return  collection;
    }catch( err ){
      return err;
    }
  }

  getUser<tipo>(id : string){
    return this.firestore.collection<tipo>("usuarios").doc(id).valueChanges();
  }

   getViajesUser<tipo>(id : string){
    //console.log('ID pasado : ', id);
    return this.firestore.collection<tipo>('usuarios').doc(id).collection('viajes').valueChanges();
    //return getDocs(collection(this.firestore.firestore, "usuarios", id, "viajes")); 

  }

  docAplanado(doc){
    return {id:doc.id, ...doc.data()};
  }

  
}
