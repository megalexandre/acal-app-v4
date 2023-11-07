import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DateTimePipe, IdentificationPipe, ParamPipe, ReasonPipe, ReferencePipe, TypePipe } from '.';
import { CategoryTypePipe } from './category/category-type.pipe';
import { MonthPipe } from './month/month.pipe';
import { AddressPipe } from './address/address.pipe';
import { TooltipHydrometerPipe } from './tooltip-hydrometer/tooltip-hydrometer.pipe';

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
  TooltipHydrometerPipe,
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
    ReferencePipe,
  ]
  
})
export class PipeModule { }
