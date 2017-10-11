import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';
import { QrComponent } from './qr/qr.component';
import { AuthGuard } from '../../auth-guard.service';

const routes: Routes = [  
  {
    path: 'configuracion/clues',
    children: [
       { path: 'lista', component: ListaComponent},
       { path: 'nuevo', component: FormularioComponent },
       { path: 'editar/:id', component: FormularioComponent},
       { path: 'qr/:id', component: QrComponent},
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class cluesRoutingModule { }

