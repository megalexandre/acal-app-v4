import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { StatusComponent } from '@model/default/status';
import { isValid, parse, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';


@Component({
  selector: 'app-date',
  template: `
    <input
      nbInput
      fullWidth
      type="text"
      mask="00/00/0000"
      [dropSpecialCharacters]="false"
      [placeholder]="placeHolder"
      [status]="status"
      [disabled]="disabled"
      [(ngModel)]="_ngModel"
      (ngModelChange)="onModelChange()"
      >
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppDateComponent),
      multi: true
    }
  ]
})
export class AppDateComponent implements OnChanges, ControlValueAccessor  {

  @Input()
  public placeHolder: string = "Data:";


  @Input()
  public status: StatusComponent = 'basic';

  @Input()
  public ngModel: string | null = null;

  @Input()
  public submmited?: boolean = false;

  @Output()
  public modelChange = new EventEmitter<string | null>();

  public disabled: boolean = false;
  private readonly completedSize = 10;
  private readonly exportFormat = 'dd-MM-yyyy';
  private valid: boolean = false;
  public _ngModel: string = "";

  constructor(){

  }

  writeValue(value: any): void {
    this._ngModel = value
  }

  registerOnChange(fn: any): void {
    this.onModelChange = fn
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnChanges(_: SimpleChanges): void {
    this.onModelChange();
  }

  public onModelChange(){
    this.valid = this.isValid(this._ngModel)

    if(this.valid){
      this.modelChange.emit( this.format(this._ngModel));
    } else {
      this.modelChange.emit(null);
    }

    this.updateStatus()
  }

  updateStatus(){
    if(this.submmited === false){
      this.status = 'basic'
    } else {

      if(this._ngModel != null){
          this.status = 'success'
        } else {
          this.status = 'danger'
        }
    }
  }

  private format(date: string): string {
    const [day, month, year] = date.split('/').map(Number);
    const parsedDate = parse(`${day}/${month}/${year}`, 'P', new Date(), { locale: ptBR });
    return format(parsedDate, this.exportFormat);
  }

  private isValid(date: string): boolean {
    if(!date || date.length !== this.completedSize) {
      return false;
    }

    const [day, month, year] = date.split('/').map(Number);
    const parsedDate = parse(`${day}/${month}/${year}`, 'P', new Date(), { locale: ptBR });
    return isValid(parsedDate);
  }
}
