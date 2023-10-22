import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbSelectModule, NbSpinnerModule } from '@nebular/theme';
import { NgxMaskModule } from 'ngx-mask';
import { AcalModule } from '../@acal/acal.module';
import { PipeModule } from '../@pipe/pipe.module';
import { AppCategoryTypeComponent } from './app-category-type/app-category-type.component';
import { AppDateComponent } from './app-date/app-date.component';
import { AppCurrencyComponent } from './app-currency/app-currency.component';
import { AppSelectAreaComponent } from './app-select-area/app-select-area.component';
import { AreaService } from 'app/pages/registration/area/area.service';
import { AppYesOrNoComponent } from './app-yes-or-no/app-yes-or-no.component';
import { AppSelectCustomerComponent } from './app-select-customer/app-select-customer.component';
import { AppSelectCategoryComponent } from './app-select-category/app-select-category.component';
import { CategoryService } from 'app/pages/registration/category/category.service';
import { AppSelectAddressComponent } from './app-select-address/app-select-address.component';
import { AppReferenceComponent } from './app-reference/app-reference.component';

const APP_COMPONENTS = [
  AppDateComponent,
  AppCategoryTypeComponent,
  AppCurrencyComponent,
  AppSelectAreaComponent,
  AppYesOrNoComponent,
  AppSelectCustomerComponent,
  AppSelectCategoryComponent,
  AppSelectAddressComponent,
  AppReferenceComponent,
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
    ...APP_COMPONENTS,
  ],

  exports:[
    ...APP_COMPONENTS,
  ],

  providers:[
    AreaService,
    CategoryService
  ]
})
export class AppComponentModule { }
