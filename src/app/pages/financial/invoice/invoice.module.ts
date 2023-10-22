import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbFormFieldModule, NbIconModule, NbInputModule, NbSpinnerModule, NbToggleModule } from '@nebular/theme';
import { AcalModule } from 'app/@acal/acal.module';
import { AppComponentModule } from 'app/@app-component/app-component.module';
import { DirectiveModule } from 'app/@directive/directive.module';
import { PipeModule } from 'app/@pipe/pipe.module';
import { ComponentModule } from 'app/component/component.module';
import { NgxMaskModule } from 'ngx-mask';
import { InvoiceCreateComponent } from './invoice-create/invoice-create.component';
import { InvoicePaginateComponent } from './invoice-paginate/invoice-paginate.component';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceComponent } from './invoice.component';
import { InvoiceService } from './invoice.service';
import { ProposalService } from './proposal.service';

@NgModule({
  imports: [
    CommonModule,
    InvoiceRoutingModule,
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
    NbToggleModule,
    AppComponentModule,
  ],
  declarations: [
    InvoiceComponent,
    InvoiceCreateComponent,
    InvoicePaginateComponent,
    //InvoiceEditComponent,
    //InvoiceDeleteComponent,
  ],
  providers: [
    InvoiceService,
    ProposalService,
  ]
})
export class InvoiceModule { }
