import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Customer, CustomerPageFilter } from 'app/pages/registration/customer/customer.model/customer';
import { Page } from '@model/page';
import { CustomerService } from 'app/pages/registration/customer/customer.service';

@Component({
  selector: 'ngx-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.scss']
})
export class SelectUserComponent implements OnInit{

  @Output()
  public selectCustomer = new EventEmitter()
  public customer: Customer = null;

  public filter: CustomerPageFilter = new CustomerPageFilter()

  public personType : 'PERSON'|'LEGAL'  = 'PERSON';

  public page: Page<Customer>;
  public loading: boolean =  false;

  constructor(
    private service: CustomerService,
    ){
  }

  ngOnInit(): void {
    this.search();
  }


  public order(field: string){

    /*
    this.filter.sortedField = field
    if(this.filter.direction ===  'ASC') {
      this.filter.direction = 'DESC';
    } else {
      this.filter.direction = 'ASC';
    }
    */

    this.search();
  }

  public selectUser(user: Customer){
    this.customer = user
    this.selectCustomer.emit(user)
  }

  public clearUser(){
    this.customer = null
    this.selectCustomer.emit(null)
  }

  public togglePersonType(){
    this.filter.documentNumber = null;
    if(this.personType === 'LEGAL'){
      this.personType = 'PERSON'
    } else {
      this.personType = 'LEGAL'
    }
  }


  public paginate(page: number){
   // this.filter.page = page;
    this.search('paginate');
  }

  public search(action: String = 'serch') {
    if(action ==='serch'){
     // this.filter?.page?.number = 0;
    }

    this.loading = true;
    this.service.getPage(this.filter).subscribe(
      page => {
       //this.page = page;
        this.loading = false;
      },
    );
  }

}
