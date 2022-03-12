import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroDetallePage } from './registro-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroDetallePageRoutingModule {}
