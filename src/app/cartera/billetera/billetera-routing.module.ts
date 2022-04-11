import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BilleteraPage } from './billetera.page';

const routes: Routes = [
  {
    path: '',
    component: BilleteraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BilleteraPageRoutingModule {}
