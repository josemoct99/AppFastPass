import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarDatosPage } from './actualizar-datos.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarDatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarDatosPageRoutingModule {}
