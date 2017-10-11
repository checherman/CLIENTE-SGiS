import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioComponent } from './formulario/formulario.component';
import { AuthGuard } from '../../auth-guard.service';

const routes: Routes = [
  { path: 'configuracion', redirectTo: '/configuracion/sucursal-configuracion/editar/1', pathMatch: 'full' },
  {
    path: 'configuracion/sucursal-configuracion',
    children: [
       { path: 'editar/:id', component: FormularioComponent },
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ConfiguracionSucursalRoutingModule { }

