import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BilleteraPageModule } from './cartera/billetera/billetera.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'cartera',
    children: [
      {
        path: "",
        loadChildren: () => import('./cartera/cartera.module').then( m => m.CarteraPageModule)
      },
      {
        path: ":carteraID",
        loadChildren: () => import('./cartera/cartera-detalle/cartera-detalle-routing.module').then( m => m.CarteraDetallePageRoutingModule)
      },
      {
        path: "billetera",
        loadChildren:() => import('./cartera/billetera/billetera-routing.module').then(m => m.BilleteraPageRoutingModule)
      }
    ]

  },
  {
    path: 'atencion-cliente',
    loadChildren: () => import('./atencion-cliente/atencion-cliente.module').then( m => m.AtencionClientePageModule)
  },
  {
    path: 'actualizar-datos',
    loadChildren: () => import('./actualizar-datos/actualizar-datos.module').then( m => m.ActualizarDatosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    children: [
      {
        path: "",
        loadChildren: () => import('./registro/registro.module').then(m => m.RegistroPageModule)
      },
      {
        path: ":registroID",
        loadChildren: () => import('./registro/registro-detalle/registro-detalle-routing.module').then(m => m.RegistroDetallePageRoutingModule)
      }
    ]
  },
  {
    path: 'inscripcion',
    loadChildren: () => import('./inscripcion/inscripcion.module').then( m => m.InscripcionPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
