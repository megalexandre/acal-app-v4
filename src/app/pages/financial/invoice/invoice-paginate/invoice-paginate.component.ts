import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginateComponent } from '@core/paginate.component';
import { InvoicePage, InvoicePageFilter } from '@model/default/invoice';
import { Page } from '@model/page';
import { DataService } from 'app/@shared/data.service';
import { InvoiceService } from '../invoice.service';

@Component({
  templateUrl:'./invoice-paginate.component.html',
  styleUrls: ['./invoice-paginate.component.scss']
})
export class InvoicePaginateComponent extends PaginateComponent implements OnInit {

  public title = "Faturas"
  public page: Page<InvoicePage>;
  public filter: InvoicePageFilter = new InvoicePageFilter()
  public loading: boolean =  false;

  constructor(
    public service: InvoiceService,
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
