import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentesModule } from './componentes/componentes.module';
import { InputComponent } from './componentes/input/input.component';
import { LayoutAdminComponent } from './componentes/layout/layout-admin/layout-admin.component';
import { SessionAdminComponent } from './componentes/layout/session-admin/session-admin.component';
import { SelectComponent } from './componentes/select/select.component';
import { ComponentesService } from './services/componentes.service';
import { ErrorHandlerService } from './services/error-handler.service';

@NgModule({
  imports: [
    CommonModule,
    ComponentesModule,
    RouterModule,
  ],
  providers: [
    ComponentesService,
    ErrorHandlerService
  ],
  exports: [
    LayoutAdminComponent,
    SessionAdminComponent,
    InputComponent,
    SelectComponent
  ]
})
export class SharedModule { }
