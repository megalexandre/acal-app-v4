import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DateTimePipe, IdentificationPipe, ParamPipe, ReasonPipe, ReferencePipe, TypePipe } from '.';
import { CategoryTypePipe } from './category/category-type.pipe';

const PIPES = [
  IdentificationPipe,
  ParamPipe,
  ReferencePipe,
  DateTimePipe,
  ReasonPipe,
  TypePipe,
  CategoryTypePipe,
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
  ]
})
export class PipeModule { }
