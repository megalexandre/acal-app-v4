import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerPaginateComponent } from './customer-paginate/customer-paginate.component';
import { CustomerComponent } from './customer.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    children: [
    {
      path: 'paginate',
      component: CustomerPaginateComponent
    },
    {
      path: 'create',
      component: CustomerCreateComponent
    },
    {
      path: 'edit',
      component: CustomerEditComponent
    },
    {
      path: 'delete',
      component: CustomerDeleteComponent
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
export class CustomerRoutingModule {
}

