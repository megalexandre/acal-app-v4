import { AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { StatusComponent } from '@model/default/status';
import { format, isValid, parse, parseISO } from 'date-fns';

@Component({
  selector: 'app-date',
  template: `
    <input
      nbInput
      fullWidth
      mask="00/00/0000"
      type="text"
      (click)="setSubmmited()"
      [status]="status"
      [placeholder]="placeHolder"
      [dropSpecialCharacters]="true"
      [(ngModel)]="_dateAsStrting"
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
export class AppDateComponent implements ControlValueAccessor, DoCheck, OnInit {

  @Input() public placeHolder: string = "Data:";
  @Input() public submmited?: boolean = false;
  @Input() public value: Date | null = null;
  @Output() public ngModelChange = new EventEmitter<Date | null>();

  public _dateAsStrting: String = ""

  public disabled: boolean = false;
  public status: StatusComponent = 'basic'; 
  private isValid: boolean | null = null;

  constructor(){
    this.startValue()
  }

  ngOnInit(): void {
    this.startValue();
  }
  
  startValue(){
    if(this.value && isValid(this.value)){
      this._dateAsStrting = format(this.value, "ddMMyyyy")
    }
  }

  ngDoCheck(): void {
    this.updateStatus()
  }

  onModelChanges(value: string){
    this.updateStatus();
    this.ngModelChange.emit(this.parseDate(value))
  }
  
  writeValue(obj: Date): void {
    this.value = obj
  }

  registerOnChange(fn: any): void {
    this.onModelChanges = fn
  }

  registerOnTouched(fn: any): void {
    this.setSubmmited = fn
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled
  }

  setSubmmited(){
    this.submmited = true
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
    if(!this.submmited){
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
