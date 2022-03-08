import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarteraPage } from './cartera.page';

const routes: Routes = [
  {
    path: '',
    component: CarteraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarteraPageRoutingModule {}
