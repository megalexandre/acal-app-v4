import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginateComponent } from '@core/paginate.component';
import { Page } from '@model/page';
import { DataService } from 'app/@shared/data.service';
import { HydrometerService } from '../hydrometer.service';
import { HydrometerPage, HydrometerPageFilter } from '../hydrometer.model/hydrometer';

@Component({
  templateUrl:'./hydrometer-paginate.component.html',
  styleUrls: ['./hydrometer-paginate.component.scss']
})
export class HydrometerPaginateComponent extends PaginateComponent implements OnInit {

  public title = "Hidrômetros"
  public page: Page<HydrometerPage>;
  public filter: HydrometerPageFilter = new HydrometerPageFilter()
  public loading: boolean =  false;

  constructor(
    public service: HydrometerService,
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

}
