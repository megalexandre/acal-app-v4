import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Categories, CategoryType } from '@model/default/category';
import { StatusComponent } from '@model/default/status';

@Component({
  selector: 'app-category-type',
  template: `
  <nb-select  [(selected)]="model" [disabled]="disabled" [status]='status' [disabled]='disabled' fullWidth (selectedChange)="selectedChange($event)" placeholder="Selecione">
    <nb-option [value]="null">Selecione</nb-option>
    <nb-option *ngFor="let category of categories" [value]="category.name">{{category.name | categoryType}}</nb-option>
  </nb-select>
  `,
   providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppCategoryTypeComponent),
      multi: true
    }
  ]
})
export class AppCategoryTypeComponent implements ControlValueAccessor, OnChanges  {

  @Input()
  public model: CategoryType | null = null;

  @Input()
  public submmited: boolean = false;

  @Input()
  disabled: boolean = false;

  @Output()
  public modelChange: EventEmitter<CategoryType | null> = new EventEmitter<CategoryType | null>();

  public status: StatusComponent = 'basic';
  public categories = Categories

  constructor() { }

  ngOnChanges(_: SimpleChanges) {
    this.updateStatus()
  }

  updateStatus(){
    if(this.submmited === false){
      this.status = 'basic'
    } else {

      if(this.model != null){
          this.status = 'success'
        } else {
          this.status = 'danger'
        }
    }
  }

  onChange: any = () => { };

  onTouched(){
    this.updateStatus()
  }

  writeValue(model: CategoryType): void {
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

  selectedChange(value: CategoryType | null) {
    this.model = value;
    this.updateStatus();
    this.modelChange.emit(value);
    this.onChange(value);
  }

}

