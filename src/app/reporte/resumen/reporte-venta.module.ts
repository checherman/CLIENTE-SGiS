import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterStateSnapshot } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HubModule } from '../../hub/hub.module';
import { PerfilModule } from '../../perfil/perfil.module';
import { BloquearPantallaModule } from '../../bloquear-pantalla/bloquear-pantalla.module';
import { ReporteVentaRoutingModule } from './reporte-venta-routing.module';
import { PaginacionModule } from '../../parcial/paginacion/paginacion.module';

import { MenuModule } from '../../menu/menu.module';
import { ParcialModule } from '../../parcial/parcial.module';

import { ReporteVentaComponent } from './venta/lista.component';
import { FormularioComponent } from './formulario/formulario.component';

import { AuthService } from '../../auth.service';

//crud
import { CrudService } from '../../crud/crud.service';
import { CrudModule }  from '../../crud/crud.module';
//fin crud
import { Select2Module } from 'ng2-select2';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReporteVentaRoutingModule,
    HubModule,
    PerfilModule,
    BloquearPantallaModule,
    MenuModule, 
    ParcialModule,
    PaginacionModule,
    CrudModule,
    Select2Module
  ],
  declarations: [ 
    ReporteVentaComponent,
    FormularioComponent
  ],
  providers: [ AuthService, CrudService ]
})
export class ReporteVentaModule { }