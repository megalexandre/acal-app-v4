import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbFormFieldModule, NbIconModule, NbInputModule, NbSpinnerModule, NbStepperModule, NbTabsetModule } from '@nebular/theme';
import { AcalModule } from 'app/@acal/acal.module';
import { AppComponentModule } from 'app/@app-component/app-component.module';
import { DirectiveModule } from 'app/@directive/directive.module';
import { PipeModule } from 'app/@pipe/pipe.module';
import { ComponentModule } from 'app/component/component.module';
import { NgxMaskModule } from 'ngx-mask';
import { LinkCreateComponent } from './link-create/link-create.component';
import { LinkDeleteComponent } from './link-delete/link-delete.component';
import { LinkEditComponent } from './link-edit/link-edit.component';
import { LinkPaginateComponent } from './link-paginate/link-paginate.component';
import { LinkRoutingModule } from './link-routing.module';
import { LinkComponent } from './link.component';
import { LinkService } from './link.service';

@NgModule({
  imports: [
    CommonModule,
    LinkRoutingModule,
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
    AppComponentModule,
    NbStepperModule,
    NbTabsetModule,
  ],
  declarations: [
    LinkComponent,
    LinkCreateComponent,
    LinkPaginateComponent,
    LinkEditComponent,
    LinkDeleteComponent,
  ],
  providers: [
    LinkService,
  ]
})
export class LinkModule { }
