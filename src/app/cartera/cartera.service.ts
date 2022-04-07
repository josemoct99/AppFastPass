import { Injectable } from '@angular/core';
import { Pago } from './cartera-detalle/cartera-model';

@Injectable({
  providedIn: 'root'
})
export class CarteraService {


  public pagos: Pago[] = []

  constructor() { }

  getPagos() {
    return [...this.pagos.reverse()] //Los puntos quieren decir que será una copia de lo que se requiere
  }

  getPago(pagoID: string) {
    return {
      ...this.pagos.find(viaje => {
        return viaje.id === pagoID
      })
    }
  }

  addPago(id : string, fecha: string, valor:number, banco:string) {
    this.pagos.push({
      id,
      fecha,
      valor,
      banco
    });
   }

  deletePago(pagoID : string) {
    this.pagos = this.pagos.filter(viaje => {
      return viaje.id !== pagoID
    });
   }


   restartPagos() {
    this.pagos = []
  }
}
