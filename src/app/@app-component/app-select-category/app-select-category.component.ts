import { Component, EventEmitter, forwardRef, OnChanges, Output } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { Category, CategoryPage, CategoryPageFilter } from '@model/default/category'
import { Page } from '@model/page'
import { CategoryService } from 'app/pages/registration/category/category.service'

@Component({
  selector: 'app-select-category',
  templateUrl: './app-select-category.component.html',
  styleUrls: ['./app-select-category.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppSelectCategoryComponent),
      multi: true,
    },
  ],
})
export class AppSelectCategoryComponent implements ControlValueAccessor {

  @Output()
  public ngModelChange: EventEmitter<Category | null> = new EventEmitter<Category | null>()

  public filter: CategoryPageFilter = new CategoryPageFilter()
  public page: Page<CategoryPage>
  public loading: boolean = false
  public category: Category | null = null

  constructor(public service: CategoryService) {}

  public emit(category: Category) {
    this.category = category
    this.onChanges()
  }

  public remove() {
    this.category = null
    this.filter.reset()
    this.page.content = null
    this.onChanges()
  }

  onTouch() {}

  onChanges() {
    this.ngModelChange.emit(this.category)
  }

  writeValue(category: Category): void {
    this.category = category;
  }

  registerOnChange(fn: any): void {
    this.onChanges = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }

  setDisabledState?(isDisabled: boolean): void {}

  public search(action: string = 'search') {
    if (action === 'search') {
      this.filter.page.number = 0
    }

    this.loading = true
    this.service.paginate(this.filter).subscribe((page) => {
      this.page = page
      this.loading = false
    })
  }

  public order(field: string) {
    this.filter.sort.field = field

    this.toogleDirection()
    this.search()
  }

  private toogleDirection() {
    if (this.filter.sort.direction === 'ASC') {
      this.filter.sort.direction = 'DESC'
    } else {
      this.filter.sort.direction = 'ASC'
    }
  }

  public paginate(number: number) {
    this.filter.page.number = number
    this.search('paginate')
  }

  reset() {
    this.filter.reset()
    this.search()
  }
}
