import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginateComponent } from '@core/paginate.component';
import { LinkPage, LinkPageFilter } from 'app/pages/registration/link/link.model/link';
import { Page } from '@model/page';
import { DataService } from 'app/@shared/data.service';
import { LinkService } from '../link.service';
import { Category } from '@model/default/category';
import { Area } from '@model/default/area';

@Component({
  templateUrl:'./link-paginate.component.html',
  styleUrls: ['./link-paginate.component.scss']
})
export class LinkPaginateComponent extends PaginateComponent implements OnInit {

  public title = "Ligações"
  public page: Page<LinkPage>;
  public filter: LinkPageFilter = new LinkPageFilter()
  public loading: boolean =  false;

  constructor(
    public service: LinkService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public data: DataService,
    ){
      super(service, activatedRoute, router, data)
  }

  ngOnInit(): void {
    this.search();
  }

  reset(){
    this.filter.reset()
    this.search()
  }
  
  setCategory(category: Category | null){
    this.filter.category = category;
    this.search()
  }

  setArea(area: Area| null){
    this.filter.area = area;
    this.search()
  }


}
