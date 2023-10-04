import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbFormFieldModule, NbIconModule, NbInputModule, NbSpinnerModule } from '@nebular/theme';
import { ComponentModule } from 'app/component/component.module';
import { NgxMaskModule } from 'ngx-mask';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerService } from './customer.service';
import { CustomerPaginateComponent } from './customer-paginate/customer-paginate.component';
import { AcalModule } from 'app/@acal/acal.module';
import { PipeModule } from 'app/@pipe/pipe.module';
import { DirectiveModule } from 'app/@directive/directive.module';
import { AppComponent } from 'app/app.component';
import { AppComponentModule } from 'app/@app-component/app-component.module';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
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
  ],
  declarations: [
    CustomerComponent,
    CustomerPaginateComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    CustomerDeleteComponent,
  ],
  providers: [
    CustomerService,
  ]
})
export class CustomerModule { }
