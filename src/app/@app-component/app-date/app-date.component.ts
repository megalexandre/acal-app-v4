import { Component, DoCheck, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { StatusComponent } from '@model/default/status';
import { parse, isValid, format } from "date-fns";
import { stat } from 'fs';

@Component({
  selector: 'app-date',
  template: `{{submmited}} 
    {{status}}
    <input
      nbInput
      fullWidth
      mask="00/00/0000"
      type="text"
      [status]="status"
      [placeholder]="placeHolder"
      [dropSpecialCharacters]="true"
      [(ngModel)]="ngModel"
      (ngModelChange)="onModelChanges($event)"
      >`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppDateComponent),
      multi: true
    }
  ]
})
export class AppDateComponent implements ControlValueAccessor, DoCheck {
  @Input() public placeHolder: string = "Data:";
  @Input() public submmited?: boolean = false;
  @Input() public ngModel: Date | null = new Date();
  @Output() public ngModelChange = new EventEmitter<Date | null>();

  public disabled: boolean = false;
  public status: StatusComponent = 'basic'; 
  private isValid: boolean | null = false;

  constructor(){  }

  ngDoCheck(): void {
    this.updateStatus()
  }

  onModelChanges(value: string){
    this.updateStatus();
    this.ngModelChange.emit(this.parseDate(value))
  }
  
  writeValue(obj: any): void {
    this.ngModel = obj
  }

  registerOnChange(fn: any): void {
    this.onModelChanges = fn
  }

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled
  }

  
  parseDate(date: string): Date | null {
    
    if(!date || date.length === 0){
      this.isValid = null
    } else {
      if(date.length === 8){

        const parsed = parse(date, "ddMMyyyy", new Date())
        if (isValid(parsed)) {
          this.isValid = true;
          return parsed
        }

      } else {
         this.isValid = false
      }
    }

    return null;
  }

  updateStatus(){
    if(this.submmited){
      this.status = 'basic';  
    } else {
      if(this.isValid || this.isValid === null){
        this.status = 'success'
      } else {
        this.status = 'danger'
      }
    }
  }

}
