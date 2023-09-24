import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Category, CategoryFilter, CategoryPage, CategoryPageFilter } from '@model/default/_index';
import { DefaultService } from 'app/@shared/default.service';

@Injectable()
export class CategoryService extends DefaultService<Category, CategoryFilter, CategoryPage, CategoryPageFilter> {

  public get env(): string {
    return `${environment.category}`
  }

  constructor(http: HttpClient) {
    super(http)
  }

}
