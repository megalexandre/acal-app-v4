import { Component, DoCheck, EventEmitter, Input, OnChanges, Output, SimpleChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { StatusComponent } from '@model/default/status';

@Component({
  selector: 'app-currency',
  template: `
  <input
    mask="separator.2"
    prefix="R$ "
    nbInput fullWidth placeholder="value:"
    [(ngModel)]="model"
    (ngModelChange)="onChange($event)"
    [status]="status"
    [thousandSeparator]="'.'"
    [decimalMarker]="','"
    [dropSpecialCharacters]="true"
    [disabled]="disabled"
  >`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppCurrencyComponent),
      multi: true
    }
  ]
})
export class AppCurrencyComponent implements ControlValueAccessor,  DoCheck  {

  public status: StatusComponent = 'basic';

  @Input()
  public submitted: boolean = false;

  @Input()
  public model?: string = null;

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
    let emitValue = null;

    if (this.model && this.model.length !== 0) {
      emitValue = Number(this.model).toFixed(2)
    }

    this.modelChange.emit(emitValue)
  }
}
