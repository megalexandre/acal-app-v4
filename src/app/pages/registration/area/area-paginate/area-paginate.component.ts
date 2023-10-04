import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginateComponent } from '@core/paginate.component';
import { AreaPage, AreaPageFilter } from '@model/default/area';
import { Page } from '@model/page';
import { DataService } from 'app/@shared/data.service';
import { AreaService } from '../area.service';

@Component({
  templateUrl:'./area-paginate.component.html',
  styleUrls: ['./area-paginate.component.scss']
})
export class AreaPaginateComponent extends PaginateComponent implements OnInit {

  public page: Page<AreaPage>;
  public filter: AreaPageFilter = new AreaPageFilter()
  public loading: boolean =  false;

  constructor(
    public service: AreaService,
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
