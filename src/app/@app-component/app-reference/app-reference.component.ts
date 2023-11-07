import { Component, DoCheck, EventEmitter, Input, OnChanges, Output, SimpleChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Reference } from '@model/default/reference';
import { StatusComponent } from '@model/default/status';

const months = {  1: "JANUARY", 2: "FEBRUARY", 3: "MARCH",  4: "APRIL",  5: "MAY",  6: "JUNE",  7: "JULY",  8: "AUGUST",  9: "SEPTEMBER",  10: "OCTOBER",  11: "NOVEMBER",  12: "DECEMBER"};

@Component({
  selector: 'app-reference',
  template: `
  <input
    nbInput
    fullWidth
    title="referência"
    placeHolder="referência"
    mask="00/0000"
    [dropSpecialCharacters]="false"
    [(ngModel)]="value"
    (ngModelChange)="ngModelChange($event)"
  >`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppReferenceComponent),
      multi: true
    }
  ]
})
export class AppReferenceComponent implements ControlValueAccessor {

  protected isDisabled: boolean = false;
  protected isValid: boolean = true;

  protected value: string ="";
  protected status: StatusComponent = 'basic';
  
  onChange = (_: any) => {};
  onTouched = () => {};

  ngModelChange(value: string){
    if(value.length === 7){
      const values = value.split('/')
      const reference: Reference = {
        month: months[Number(values[0])],
        year: Number(values[1]),
      }
      this.onChange(reference);

    }else {
      this.onChange(null);
    }
  }

  writeValue(value: string | null): void {
    this.value = value
    
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  
}

