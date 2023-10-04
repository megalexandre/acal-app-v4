import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbFormFieldModule, NbIconModule, NbInputModule, NbRadioModule, NbSpinnerModule } from '@nebular/theme';
import { AcalModule } from 'app/@acal/acal.module';
import { AppComponentModule } from 'app/@app-component/app-component.module';
import { DirectiveModule } from 'app/@directive/directive.module';
import { PipeModule } from 'app/@pipe/pipe.module';
import { ComponentModule } from 'app/component/component.module';
import { NgxMaskModule } from 'ngx-mask';
import { AddressPaginateComponent } from './address-paginate/address-paginate.component';
import { AddressRoutingModule } from './address-routing.module';
import { AddressComponent } from './address.component';
import { AddressService } from './address.service';
import { AddressCreateComponent } from './address-create/address-create.component';
import { AddressEditComponent } from './address-edit/address-edit.component';
import { AddressDeleteComponent } from './address-delete/address-delete.component';

@NgModule({
  imports: [
    CommonModule,
    AddressRoutingModule,
    NbCardModule,
    NbInputModule,
    NbRadioModule,
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
    AddressComponent,
    AddressCreateComponent,
    AddressPaginateComponent,
    AddressEditComponent,
    AddressDeleteComponent,
  ],
  providers: [
    AddressService,
  ]
})
export class AddressModule { }
