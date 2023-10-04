import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginateComponent } from '@core/paginate.component';
import { CategoryPage, CategoryPageFilter } from '@model/default/category';
import { Page } from '@model/page';
import { DataService } from 'app/@shared/data.service';
import { CategoryService } from '../category.service';

@Component({
  templateUrl:'./category-paginate.component.html',
  styleUrls: ['./category-paginate.component.scss']
})
export class CategoryPaginateComponent extends PaginateComponent implements OnInit {

  public page: Page<CategoryPage>;
  public filter: CategoryPageFilter = new CategoryPageFilter()
  public loading: boolean =  false;

  constructor(
    public service: CategoryService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public data: DataService,
    ){
      super(service, activatedRoute, router, data)
  }

  ngOnInit(): void {
    this.search();
  }

}
