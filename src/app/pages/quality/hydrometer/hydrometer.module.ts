import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbFormFieldModule, NbIconModule, NbInputModule, NbSpinnerModule, NbStepperModule, NbTabsetModule, NbTooltipModule } from '@nebular/theme';
import { AcalModule } from 'app/@acal/acal.module';
import { AppComponentModule } from 'app/@app-component/app-component.module';
import { DirectiveModule } from 'app/@directive/directive.module';
import { PipeModule } from 'app/@pipe/pipe.module';
import { ComponentModule } from 'app/component/component.module';
import { NgxMaskModule } from 'ngx-mask';
import { HydrometerService } from './hydrometer.service';
import { HydrometerDeleteComponent } from './hydrometer-delete/hydrometer-delete.component';
import { HydrometerPaginateComponent } from './hydrometer-paginate/hydrometer-paginate.component';
import { HydrometerRoutingModule } from './hydrometer-routing.module';
import { HydrometerComponent } from './hydrometer.component';
import { HydrometerCreateComponent } from './hydrometer-create/hydrometer-create.component';
import { ProposalService } from 'app/pages/financial/invoice/proposal.service';

@NgModule({
  imports: [
    CommonModule,
    HydrometerRoutingModule,
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
    NbTooltipModule,
  ],
  declarations: [
    HydrometerComponent,
    HydrometerCreateComponent,
    HydrometerPaginateComponent,
    HydrometerDeleteComponent,
  ],
  providers: [
    HydrometerService,
    ProposalService,
  ]
})
export class HydrometerModule { }
