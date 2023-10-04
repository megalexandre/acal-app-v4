import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent,
    children: [
      {
        path: 'link',
        loadChildren: () => import('../registration/link/link.module')
          .then(m => m.LinkModule),
      },
      {
        path: 'area',
        loadChildren: () => import('../registration/area/area.module')
          .then(m => m.AreaModule),
      },
      {
        path: 'address',
        loadChildren: () => import('../registration/address/address.module')
          .then(m => m.AddressModule),
      },
      {
        path: 'customer',
        loadChildren: () => import('../registration/customer/customer.module')
          .then(m => m.CustomerModule),
      },
      {
        path: 'category',
        loadChildren: () => import('../registration/category/category.module')
          .then(m => m.CategoryModule),
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
export class RegistrationRoutingModule {
}

