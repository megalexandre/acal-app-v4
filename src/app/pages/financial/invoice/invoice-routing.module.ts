import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceCreateComponent } from './invoice-create/invoice-create.component';
import { InvoicePaginateComponent } from './invoice-paginate/invoice-paginate.component';
import { InvoiceComponent } from './invoice.component';

const routes: Routes = [
  {
    path: '',
    component: InvoiceComponent,
    children: [
    {
      path: 'paginate',
      component: InvoicePaginateComponent
    },
    {
      path: 'create',
      component: InvoiceCreateComponent
    },
    /*
    {
      path: 'edit',
      component: InvoiceEditComponent
    },
    {
      path: 'delete',
      component: InvoiceDeleteComponent
    },
    */
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
export class InvoiceRoutingModule {
}

