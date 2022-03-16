import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarteraDetallePage } from './cartera-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: CarteraDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarteraDetallePageRoutingModule {}
