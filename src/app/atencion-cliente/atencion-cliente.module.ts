import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtencionClientePageRoutingModule } from './atencion-cliente-routing.module';

import { AtencionClientePage } from './atencion-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtencionClientePageRoutingModule
  ],
  declarations: [AtencionClientePage]
})
export class AtencionClientePageModule {}
