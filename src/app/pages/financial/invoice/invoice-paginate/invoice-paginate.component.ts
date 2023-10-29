import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Action, PaginateComponent } from '@core/paginate.component';
import { InvoicePageFilter, InvoicePageImplementation } from '@model/default/invoice';
import { Page } from '@model/page';
import { DataService } from 'app/@shared/data.service';
import { InvoiceService } from '../invoice.service';

@Component({
  templateUrl:'./invoice-paginate.component.html',
  styleUrls: ['./invoice-paginate.component.scss']
})
export class InvoicePaginateComponent extends PaginateComponent implements OnInit {

  public title = "Faturas"
  public page: Page<InvoicePageImplementation>;
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

  public search(action: Action = {name: 'search'}) {

    if(action.name === 'search'){
      this.filter.page.number = 0;
    }

    this.loading = true;
    this.service.paginate(this.filter).subscribe(
      page => {
        this.page = { 
          ...page,
          content: page.content.map((item)=>new InvoicePageImplementation(item) )
        }

        this.loading = false;
      },
    );

  }

}
