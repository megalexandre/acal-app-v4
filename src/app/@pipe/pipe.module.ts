import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DateTimePipe, IdentificationPipe, ParamPipe, ReasonPipe, ReferencePipe, TypePipe } from '.';
import { CategoryTypePipe } from './category/category-type.pipe';
import { MonthPipe } from './month/month.pipe';
import { AddressPipe } from './address/address.pipe';

const PIPES = [
  IdentificationPipe,
  ParamPipe,
  ReferencePipe,
  DateTimePipe,
  ReasonPipe,
  TypePipe,
  CategoryTypePipe,
  MonthPipe,
  AddressPipe,
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PIPES,
  ],
  exports:[
    PIPES
  ],
  providers:[
    MonthPipe,
  ]
  
})
export class PipeModule { }
