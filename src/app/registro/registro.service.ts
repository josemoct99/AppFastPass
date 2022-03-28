import { Injectable } from '@angular/core';
import { Viaje } from './registro-detalle/registro.model';
@Injectable({
  providedIn: 'root'
})
export class RegistroService {



    public viajes: Viaje[] = [
    {
      id : "000001",
      tipo: "Troncal",
      fecha: "12/02/2021",
      ruta: "H20"
    },
    {
      id : "000002",
      tipo: "Troncal",
      fecha: "12/02/2021",
      ruta: "D20"
    },
    {
      id : "000003",
      tipo: "Zonal",
      fecha: "15/02/2021",
      ruta: "107A"
    }
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

  deleteViaje(viajeID : string) {
    this.viajes = this.viajes.filter(viaje => {
      return viaje.id !== viajeID
    });
   }

}
