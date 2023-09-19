import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Action, ListComponent } from '@core/list.component';
import { CustomerPage, CustomerPageFilter, PersonType } from '@model/default/customer';
import { Page } from '@model/page';
import { DataService } from 'app/@shared/data.service';
import { CustomerService } from '../customer.service';
import { PaginateComponent } from '@core/paginate.component';

@Component({
  templateUrl: './customer-paginate.component.html',
  styleUrls: ['./customer-paginate.component.scss']
})
export class CustomerPaginateComponent extends PaginateComponent implements OnInit {

  public personType: PersonType = { name: "INDIVIDUAL" }

  public page: Page<CustomerPage>;
  public filter: CustomerPageFilter = new CustomerPageFilter()
  public loading: boolean =  false;

  constructor(
    public service: CustomerService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public data: DataService,
    ){
      super(service, activatedRoute, router, data)
  }

  ngOnInit(): void {
    this.search();
  }

  public togglePersonType(){
    this.filter.documentNumber = null;
    if(this.personType.name === "INDIVIDUAL"){
      this.personType.name = "LEGAL"
    } else {
      this.personType.name = "INDIVIDUAL"
    }
  }


}
