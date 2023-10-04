import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaComponent } from './area.component';
import { AreaPaginateComponent } from './area-paginate/area-paginate.component';
import { AreaCreateComponent } from './area-create/area-create.component';
import { AreaEditComponent } from './area-edit/area-edit.component';
import { AreaDeleteComponent } from './area-delete/area-delete.component';

const routes: Routes = [
  {
    path: '',
    component: AreaComponent,
    children: [
    {
      path: 'paginate',
      component: AreaPaginateComponent
    },
    {
      path: 'create',
      component: AreaCreateComponent
    },
    {
      path: 'edit',
      component: AreaEditComponent
    },
    {
      path: 'delete',
      component: AreaDeleteComponent
    },
    { path: '', redirectTo: 'paginate', pathMatch: 'full' },
    { path: '**', redirectTo: 'paginate' },
    ]
  },

];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AreaRoutingModule {
}

