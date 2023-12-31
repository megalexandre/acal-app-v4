import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category.component';
import { CategoryPaginateComponent } from './category-paginate/category-paginate.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryDeleteComponent } from './category-delete/category-delete.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
    children: [
    {
      path: 'paginate',
      component: CategoryPaginateComponent
    },
    {
      path: 'create',
      component: CategoryCreateComponent
    },
    {
      path: 'edit',
      component: CategoryEditComponent
    },
    {
      path: 'delete',
      component: CategoryDeleteComponent
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
export class CategoryRoutingModule {
}

