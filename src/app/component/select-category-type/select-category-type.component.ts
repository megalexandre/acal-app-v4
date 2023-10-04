import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Categories, CategoryType } from '@model/default/category';
import { StatusComponent } from '@model/default/status';

@Component({
  selector: 'app-select-category-type',
  template: `
    <nb-select  [(selected)]="model" [status]='status' fullWidth (selectedChange)="selectedChange($event)" placeholder="Selecione">
      <nb-option [value]="null">Selecione</nb-option>
      <nb-option *ngFor="let category of categories" [value]="category.name">{{category.name | categoryType}}</nb-option>
    </nb-select>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectCategoryTypeComponent),
      multi: true,
    },
  ],
})

export class SelectCategoryTypeComponent implements ControlValueAccessor {

  public status: StatusComponent = 'basic';
  public categories = Categories

  private onChange: (value: CategoryType | null) => void = () => {
    this.selectedChange(this.model)
  };

  private onTouched: () => void = () => {

  };

  @Input()
  public model: CategoryType | null = null;

  @Output()
  public modelChange: EventEmitter<CategoryType | null> = new EventEmitter<CategoryType | null>();


  constructor(){
  }

  selectedChange(value: CategoryType | null) {
    this.modelChange.emit(value);
  }

  writeValue(value: CategoryType | null): void {
    this.model = value;
  }

  registerOnChange(fn: (value: CategoryType | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
