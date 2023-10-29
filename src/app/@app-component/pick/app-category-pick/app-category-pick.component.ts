import { Component, DoCheck, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '@model/default/category';
import { CategoryService } from 'app/pages/registration/category/category.service';
import { CategoriesGroups, CategoryPick } from './category.group';

@Component({
  selector: 'app-category-pick',
  templateUrl: './app-category-pick.component.html',
  styleUrls: ['./app-category-pick.component.scss'],
})
export class AppCategoryPickComponent implements DoCheck  {

  @Input()
  public ngModel: Category

  @Output()
  public ngModelChange: EventEmitter<Category | null> = new EventEmitter<Category | null>()
  
  public loaded = false;
  public categoriesGroups: CategoriesGroups[] =[];

  constructor(public service: CategoryService){
    this.service.list().subscribe(
      (categories: CategoryPick[]) => {
        this.createGroups(categories)
        this.loaded = true
      }
    )
  }

  ngDoCheck(): void {
  }

  createGroups(categories: Category[]): void{
    const categoriesNames = Array.from(new Set(categories.map((category: CategoryPick) => category.type))).sort((a,b) => a.localeCompare(b))

    categoriesNames.forEach(
      (name) => {
        this.categoriesGroups.push({
          name: name,
          categories: categories.filter((category)=> category.type === name).sort((a, b) => a.name.localeCompare(b.name))
        })
      }
    )
  }

  selectedChange(category: Category | null){
    this.ngModelChange.emit(category)
  }

  compareWith(a: Category, b: Category ){
    return a?.id === b?.id;
  }
}
