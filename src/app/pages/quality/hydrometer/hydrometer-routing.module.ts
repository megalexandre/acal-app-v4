import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HydrometerComponent } from './hydrometer.component';
import { HydrometerPaginateComponent } from './hydrometer-paginate/hydrometer-paginate.component';
import { HydrometerDeleteComponent } from './hydrometer-delete/hydrometer-delete.component';
import { HydrometerCreateComponent } from './hydrometer-create/hydrometer-create.component';

const routes: Routes = [
  {
    path: '',
    component: HydrometerComponent,
    children: [
    {
      path: 'create',
      component: HydrometerCreateComponent
    },
    {
      path: 'paginate',
      component: HydrometerPaginateComponent
    },
    {
      path: 'delete',
      component: HydrometerDeleteComponent
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
export class HydrometerRoutingModule {
}

