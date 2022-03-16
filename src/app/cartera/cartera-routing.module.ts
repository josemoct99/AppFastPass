import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarteraPage } from './cartera.page';

const routes: Routes = [
  {
    path: '',
    component: CarteraPage
  },
  {
    path: 'cartera-detalle',
    loadChildren: () => import('./cartera-detalle/cartera-detalle.module').then( m => m.CarteraDetallePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarteraPageRoutingModule {}
