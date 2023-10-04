import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbSelectModule, NbSpinnerModule } from '@nebular/theme';
import { AddressService } from 'app/pages/registration/address/address.service';
import { NgxMaskModule } from 'ngx-mask';
import { AcalModule } from './../@acal/acal.module';
import { PipeModule } from './../@pipe/pipe.module';
import { CustomerService } from './../pages/registration/customer/customer.service';
import { InputCurrencyComponent } from './input-currency/input-currency.component';
import { InputDateTimeComponent } from './input-date-time/input-date-time.component';
import { InputDateComponent } from './input-date/input-date.component';
import { PickReasonComponent } from './pick-reason/pick-reason.component';
import { PickTypeComponent } from './pick-type/pick-type.component';
import { SelectAddressComponent } from './select-address/select-address.component';
import { SelectCategoryTypeComponent } from './select-category-type/select-category-type.component';
import { SelectPlaceComponent } from './select-place/select-place.component';
import { SelectUserComponent } from './select-user/select-user.component';

const PIPES = [
  SelectUserComponent,
  SelectPlaceComponent,
  SelectAddressComponent,
  InputCurrencyComponent,
  InputDateComponent,
  InputDateTimeComponent,
  PickTypeComponent,
  PickReasonComponent,
  SelectCategoryTypeComponent,
];

@NgModule({
  imports: [
    CommonModule,
    NbInputModule,
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    AcalModule,
    NbFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModule,
    NbSpinnerModule,
    NgxMaskModule.forChild(),
    NbSelectModule,
  ],
  declarations: [
    ...PIPES,
  ],
  exports:[
    ...PIPES,
  ],
  providers:[
    AddressService,
    CustomerService,
  ]
})
export class ComponentModule { }
