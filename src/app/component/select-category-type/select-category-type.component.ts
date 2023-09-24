import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categories, CategoryType } from '@model/default/category';

@Component({
  selector: 'ngx-select-category-type',
  template: `
    <nb-select [(selected)]="model" fullWidth (selectedChange)="selectedChange($event)" placeholder="Selecione">
      <nb-option [value]="null">Selecione</nb-option>
      <nb-option *ngFor="let category of categories" [value]="category.name">{{category.name | categoryType}}</nb-option>
    </nb-select>
  `,
})

export class SelectCategoryTypeComponent {

  public categories = Categories

  @Input()
  public model: CategoryType | null = null;

  @Output()
  public modelChange: EventEmitter<CategoryType | null> = new EventEmitter<CategoryType | null>();

  selectedChange(value: CategoryType | null) {
    this.modelChange.emit(value);
  }
}
