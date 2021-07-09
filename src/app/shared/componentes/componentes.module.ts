import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { SharedMaterialModule } from '../shared-material.module';
import { InputComponent } from './input/input.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { SessionAdminComponent } from './layout/session-admin/session-admin.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,
    FlexLayoutModule,
    RouterModule
  ],
  declarations: [
    LayoutAdminComponent,
    SessionAdminComponent,
    InputComponent,
    SelectComponent
  ],
  exports: [
    LayoutAdminComponent,
    SessionAdminComponent,
    InputComponent,
    SelectComponent
   ]
})
export class ComponentesModule { }
