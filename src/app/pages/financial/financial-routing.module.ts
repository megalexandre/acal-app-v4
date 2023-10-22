import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialComponent } from './financial.component';

const routes: Routes = [
  {
    path: '',
    component: FinancialComponent,
    children: [
      
      {
        path: 'invoice',
        loadChildren: () => import('../financial/invoice/invoice.module')
          .then(m => m.InvoiceModule),
      },
      
    { path: '', redirectTo: 'invoice', pathMatch: 'full' },
    { path: '**', redirectTo: 'invoice' },
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
export class FinancialRoutingModule {
}

