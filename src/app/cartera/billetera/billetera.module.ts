import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BilleteraPageRoutingModule } from './billetera-routing.module';

import { BilleteraPage } from './billetera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BilleteraPageRoutingModule
  ],
  declarations: [BilleteraPage]
})
export class BilleteraPageModule {}
