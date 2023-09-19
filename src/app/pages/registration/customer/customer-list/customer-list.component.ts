import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Action, ListComponent } from '@core/list.component';
import { CustomerPage, CustomerPageFilter } from '@model/default/customer';
import { DataService } from 'app/@shared/data.service';
import { CustomerService } from '../customer.service';
import { Page } from '@model/page';

@Component({
  selector: 'ngx-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent  implements OnInit {

  public page: Page<CustomerPage>;
  public filter: CustomerPageFilter = new CustomerPageFilter()
  public loading: boolean =  false;

  constructor(
    public service: CustomerService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public data: DataService,
    ){
  }

  ngOnInit(): void {
    this.search();
  }

  public order(field: string){
    this.filter.sort.field = field

    this.toogleDirection();
    this.search();
  }

  private toogleDirection(){
    if(this.filter.sort.direction ===  'ASC') {
      this.filter.sort.direction = 'DESC';
    } else {
      this.filter.sort.direction = 'ASC';
    }
  }

  public search(action: Action = {name: 'search'}) {
    if(action.name === 'search'){
      this.filter.page.number = 0;
    }

    this.loading = true;
    this.service.paginate(this.prepareDataForSearch()).subscribe(
      page => {
        this.page = page;
        this.loading = false;
      },
    );

  }

  public prepareDataForSearch(): any {
    return this.filter
  }

  togglePersonType(){}

  public paginate(page: number){
    //this.filter.page = page;
    this.search({name: 'paginate'});
  }


  reset(){
    this.filter.reset()
    this.search()
  }

  public add(){
    this.router.navigate(['../add'],{relativeTo: this.activatedRoute})
  }

  public edit(id: string){
    this.data.setId = id
    this.router.navigate(['../edit'],{relativeTo: this.activatedRoute})
  }

  public remove(id: string){
    this.data.setId = id
    this.router.navigate(['../delete'],{relativeTo: this.activatedRoute})
  }

  public view(id: string){
    this.data.setId = id
    this.router.navigate(['../view'],{relativeTo: this.activatedRoute})
  }

}
