import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtencionClientePage } from './atencion-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: AtencionClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtencionClientePageRoutingModule {}
