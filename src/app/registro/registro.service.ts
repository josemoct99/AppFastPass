import { Injectable } from '@angular/core';
import { Viaje } from './registro-detalle/registro.model';
@Injectable({
  providedIn: 'root'
})
export class RegistroService {

    

    public viajes: Viaje[] = [
    {
      id : "000001",
      servicio: "Troncal",
      fecha: "12/02/2021",
      bus: "H20"
    },
    {
      id : "000002",
      servicio: "Troncal",
      fecha: "12/02/2021",
      bus: "D20"
    },
    {
      id : "000003",
      servicio: "Zonal",
      fecha: "15/02/2021",
      bus: "107A"
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

  addViaje(id : string, servicio: string, fecha: string, bus: string) {
    this.viajes.push({
      id,
      servicio,
      fecha,
      bus
    });
   }

  deleteViaje(viajeID : string) {
    this.viajes = this.viajes.filter(viaje => {
      return viaje.id !== viajeID
    });
   }

}
