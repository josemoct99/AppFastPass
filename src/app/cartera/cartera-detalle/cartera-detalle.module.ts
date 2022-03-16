import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarteraDetallePageRoutingModule } from './cartera-detalle-routing.module';

import { CarteraDetallePage } from './cartera-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarteraDetallePageRoutingModule
  ],
  declarations: [CarteraDetallePage]
})
export class CarteraDetallePageModule {}
