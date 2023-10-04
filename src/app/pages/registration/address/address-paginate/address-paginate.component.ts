import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginateComponent } from '@core/paginate.component';
import { AddressPage, AddressPageFilter } from '@model/default/address';
import { Page } from '@model/page';
import { DataService } from 'app/@shared/data.service';
import { AddressService } from '../address.service';

@Component({
  templateUrl:'./address-paginate.component.html',
  styleUrls: ['./address-paginate.component.scss']
})
export class AddressPaginateComponent extends PaginateComponent implements OnInit {

  public title: string = "Endereços"
  public page: Page<AddressPage>;
  public filter: AddressPageFilter = new AddressPageFilter()
  public loading: boolean =  false;

  constructor(
    public service: AddressService,
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
