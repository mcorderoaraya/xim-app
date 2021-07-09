import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAdminComponent } from './shared/componentes/layout/layout-admin/layout-admin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'vista/index',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutAdminComponent,
    children: [
      {
        path: 'vista',
        loadChildren: () => import('./vista/vista.module').then(m => m.VistaModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
