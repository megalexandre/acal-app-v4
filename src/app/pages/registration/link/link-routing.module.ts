import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkComponent } from './link.component';
import { LinkPaginateComponent } from './link-paginate/link-paginate.component';
import { LinkCreateComponent } from './link-create/link-create.component';
import { LinkEditComponent } from './link-edit/link-edit.component';
import { LinkDeleteComponent } from './link-delete/link-delete.component';

const routes: Routes = [
  {
    path: '',
    component: LinkComponent,
    children: [
    {
      path: 'paginate',
      component: LinkPaginateComponent
    },
    {
      path: 'create',
      component: LinkCreateComponent
    },
    {
      path: 'edit',
      component: LinkEditComponent
    },
    {
      path: 'delete',
      component: LinkDeleteComponent
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
export class LinkRoutingModule {
}

