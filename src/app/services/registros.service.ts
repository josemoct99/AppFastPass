import { Injectable } from '@angular/core';
import { Viaje } from '../registro/registro-detalle/registro.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {

  public viajes: Viaje[] =[

  ]

  constructor() { }

  getViajes() {
    return [...this.viajes.reverse()] //Los puntos quieren decir que será una copia de lo que se requiere
  }

  getViaje(viajeID: string) {
    return {
      ...this.viajes.find(viaje => {
        return viaje.id === viajeID
      })
    }
  }

  addViaje(id : string, tipo: string, fecha: string, ruta: string) {
    this.viajes.push({
      id,
      tipo,
      fecha,
      ruta
    });
   }

   restartViajes(){
     this.viajes = [];
   }

  deleteViaje(viajeID : string) {
    this.viajes = this.viajes.filter(viaje => {
      return viaje.id !== viajeID
    });
   }

}
