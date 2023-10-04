import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address.component';
import { AddressPaginateComponent } from './address-paginate/address-paginate.component';
import { AddressCreateComponent } from './address-create/address-create.component';
import { AddressEditComponent } from './address-edit/address-edit.component';
import { AddressDeleteComponent } from './address-delete/address-delete.component';

const routes: Routes = [
  {
    path: '',
    component: AddressComponent,
    children: [
    {
      path: 'paginate',
      component: AddressPaginateComponent
    },
    {
      path: 'create',
      component: AddressCreateComponent
    },
    {
      path: 'edit',
      component: AddressEditComponent
    },
    {
      path: 'delete',
      component: AddressDeleteComponent
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
export class AddressRoutingModule {
}

