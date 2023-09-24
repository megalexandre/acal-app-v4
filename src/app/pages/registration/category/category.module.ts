import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbFormFieldModule, NbIconModule, NbInputModule, NbSpinnerModule } from '@nebular/theme';
import { AcalModule } from 'app/@acal/acal.module';
import { DirectiveModule } from 'app/@directive/directive.module';
import { PipeModule } from 'app/@pipe/pipe.module';
import { ComponentModule } from 'app/component/component.module';
import { NgxMaskModule } from 'ngx-mask';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { CategoryService } from './category.service';
import { CategoryPaginateComponent } from './category-paginate/category-paginate.component';

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutingModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    AcalModule,
    NbSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    NbIconModule,
    PipeModule,
    NbFormFieldModule,
    ComponentModule,
    NbCheckboxModule,
    NgxMaskModule.forChild(),
    DirectiveModule,
  ],
  declarations: [
    CategoryComponent,
    CategoryPaginateComponent,
    /*
    CategoryCreateComponent,
    CategoryEditComponent,
    CategoryDeleteComponent,
    */
  ],
  providers: [
    CategoryService,
  ]
})
export class CategoryModule { }
