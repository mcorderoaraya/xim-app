import { CommonModule, DatePipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { SharedMaterialModule } from '../shared/shared-material.module';
import { SharedModule } from '../shared/shared.module';
import { IndexComponent } from './index/index.component';
import { VistaRoutingModule } from './vista-routing.module';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    VistaRoutingModule,
    FlexLayoutModule,
    SharedMaterialModule,
    SharedModule
  ],
  providers: [
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'CLP' }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VistaModule { }
