import { Component, DoCheck, EventEmitter, Input, OnChanges, Output, SimpleChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { StatusComponent } from '@model/default/status';

@Component({
  selector: 'app-reference',
  template: `
  <input
    nbInput
    fullWidth
    mask="00/0000"
    [(ngModel)]="model"
    (ngModelChange)="onChange($event)"
    [status]=status
    [disabled]="disabled"
  >`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppReferenceComponent),
      multi: true
    }
  ]
})
export class AppReferenceComponent implements ControlValueAccessor, DoCheck{

  public status: StatusComponent = 'basic';

  @Input()
  public submitted: boolean = false;

  @Input()
  public model: string | null = null;

  @Input()
  public disabled: boolean = false;

  @Output()
  public modelChange: EventEmitter<string | null> = new EventEmitter<string | null>();

  constructor() { }

  ngDoCheck() {
    this.updateStatus();
  }

  updateStatus(){
    if(this.submitted === false){
      this.status = 'basic'
    } else {

      if(this.model != null){
          this.status = 'success'
        } else {
          this.status = 'danger'
        }
    }
  }

  onChange(value: string | null){
    this.model = value;
    this.updateStatus();
    this.emit()
  };

  onTouched(){
    this.updateStatus()
  }

  writeValue(model: string): void {
    this.model = model
    this.onChange(model);
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public emit(){
    this.modelChange.emit(this.model)
  }
}
