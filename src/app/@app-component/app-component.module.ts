import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbAutocompleteModule, NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbSelectModule, NbSpinnerModule } from '@nebular/theme';
import { AreaService } from 'app/pages/registration/area/area.service';
import { CategoryService } from 'app/pages/registration/category/category.service';
import { NgxMaskModule } from 'ngx-mask';
import { AcalModule } from '../@acal/acal.module';
import { PipeModule } from '../@pipe/pipe.module';
import { AppCategoryTypeComponent } from './app-category-type/app-category-type.component';
import { AppCurrencyComponent } from './app-currency/app-currency.component';
import { AppDateComponent } from './app-date/app-date.component';
import { AppPaginateCategoryComponent } from './paginate/app-paginate-category/app-paginate-category.component';
import { AppReferenceComponent } from './app-reference/app-reference.component';
import { AppYesOrNoComponent } from './app-yes-or-no/app-yes-or-no.component';
import { AppCategoryPickComponent } from './pick/app-category-pick/app-category-pick.component';
import { AddressService } from 'app/pages/registration/address/address.service';
import { AppAddressPickComponent } from './pick/app-address-pick/app-address-pick.component';
import { AppAreaPickComponent } from './pick/app-area-pick/app-area-pick.component';
import { AppPaginateCustomerComponent } from './paginate/app-paginate-customer/app-paginate-customer.component';
import { AppPaginateAddressComponent } from './paginate/app-paginate-address/app-paginate-address.component';
import { AppSelectAreaComponent } from './app-select-area/app-select-area.component';
import { AppDateReactiveComponent } from './app-date-reactive/app-date-reactive.component';
import { AppAutocompleteCustomerComponent } from './autocomplete/app-autocomplete-customer.component';
import { CustomerService } from 'app/pages/registration/customer/customer.service';

const APP_AUTOCOMPLET = [
  AppAutocompleteCustomerComponent
]

const APP_PICK = [
  AppAreaPickComponent,
  AppCategoryPickComponent,
  AppAddressPickComponent,
]

const APP_PAGINATE = [
  AppPaginateCustomerComponent, 
  AppPaginateCategoryComponent,
  AppPaginateAddressComponent,
]

const APP_DATE = [
  AppDateComponent,
  AppDateReactiveComponent,
]

const APP_COMPONENTS = [
  AppSelectAreaComponent,
  AppCategoryTypeComponent,
  AppCurrencyComponent,
  AppYesOrNoComponent,
  AppPaginateCategoryComponent,
  AppReferenceComponent,
  ...APP_DATE,
  ...APP_PICK,
  ...APP_PAGINATE,  
  ...APP_AUTOCOMPLET,
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
    NbAutocompleteModule,
  ],

  declarations: [
    ...APP_COMPONENTS,
  ],

  exports:[
    ...APP_COMPONENTS,
  ],

  providers:[
    AreaService,
    AddressService,
    CategoryService,
    CustomerService,
  ]
})
export class AppComponentModule { }
