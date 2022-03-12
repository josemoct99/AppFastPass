import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroDetallePageRoutingModule } from './registro-detalle-routing.module';

import { RegistroDetallePage } from './registro-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroDetallePageRoutingModule
  ],
  declarations: [RegistroDetallePage]
})
export class RegistroDetallePageModule {}
