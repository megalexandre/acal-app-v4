import { Component, Input, OnChanges, SimpleChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { StatusComponent } from '@model/default/status';
import { format, isValid, parse } from 'date-fns';
import { ptBR } from 'date-fns/locale';

@Component({
  selector: 'app-date-reactive',
  templateUrl: './app-date-reactive.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppDateReactiveComponent),
      multi: true
    }
  ]
})
export class AppDateReactiveComponent implements ControlValueAccessor, OnChanges  {
  
  @Input() 
  public placeholder: string = "Data:";

  @Input()
  public isTouched: boolean = false;
  
  protected isDisabled: boolean = false;
  protected isValid: boolean = true;

  protected value: string ="";
  protected status: StatusComponent = 'basic';
  
  onInputChange(value: string): void {
    const transformedValue = this.stringToDate(value);
    this.onChange(transformedValue);
  }

  ngOnChanges(_: SimpleChanges): void {
    this.updateStatus()
  }

  updateStatus(){
    if(this.isTouched){
      if(this.isValid){
        this.status = 'success'
      } else {
        this.status = 'danger'
      }
    }
    else {
      this.status = 'basic'
    }
  }

  onChange = (_: any) => {};

  onTouched = () => {
    this.isTouched = true
  };

  touched(){
    this.isTouched = true;
    this.updateStatus()
  }

  writeValue(value: string | null): void {

    if(value){
      const date = new Date(value)
      this.value = format(date, "ddMMyyyy")
    } else {
      this.value = value;
    }
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }


  stringToDate(inputString: string): Date | null {
    let parsed = null 

    if (inputString.length === 8) {
      const parsedDate = this.startDateFromString(inputString)

      if(isValid(parsedDate)){
        parsed = parsedDate;
      } else {
        parsed = null
      }
    } 

    this.isValid = this.isValidDate(inputString)
    this.updateStatus()
    return parsed
  }


  isValidDate(date: string): boolean {
   
    if(date.length !== 0 && date.length !== 8){
      return false
    }else {
      return isValid(this.startDateFromString(date))
    }
  }

  startDateFromString(inputString: string){
    const day = parseInt(inputString.slice(0, 2), 10);
    const month = parseInt(inputString.slice(2, 4), 10);
    const year = parseInt(inputString.slice(4, 8), 10);

    return parse(`${year}-${month}-${day}`, 'yyyy-MM-dd', new Date(), {
      locale: ptBR,
    });
  }

}

