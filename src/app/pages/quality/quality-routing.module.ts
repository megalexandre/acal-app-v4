import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QualityComponent } from './quality.component';

const routes: Routes = [
  {
    path: '',
    component: QualityComponent,
    children: [
      {
        path: 'hydrometer',
        loadChildren: () => import('./hydrometer/hydrometer.module')
          .then(m => m.HydrometerModule),
      },
    { path: '', redirectTo: 'customer', pathMatch: 'full' },
    { path: '**', redirectTo: 'customer' },
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
export class QualityRoutingModule {
}

