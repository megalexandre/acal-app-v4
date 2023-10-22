import { Component, EventEmitter, forwardRef, OnChanges, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Customer, CustomerPage, CustomerPageFilter } from 'app/pages/registration/customer/customer.model/customer';
import { Page } from '@model/page';
import { CustomerService } from 'app/pages/registration/customer/customer.service';

@Component({
  selector: 'app-select-customer',
  templateUrl: './app-select-customer.component.html',
  styleUrls: ['./app-select-customer.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppSelectCustomerComponent),
      multi: true
    }
  ]
})
export class AppSelectCustomerComponent implements ControlValueAccessor{

  @Output()
  public ngModelChange: EventEmitter<Customer | null> = new EventEmitter<Customer | null>();

  public filter: CustomerPageFilter = new CustomerPageFilter()
  public page: Page<CustomerPage>;
  public loading: boolean =  false;
  public customer: Customer | null = null

  constructor(
    public service: CustomerService,
    ){
  }

  public emit(customer: Customer){
    this.customer = customer;
    this.onChanges();
  }

  public remove(){
    this.customer = null;
    this.filter.reset();
    this.page.content = null;
    this.onChanges();
  }

  onTouch(){

  }

  onChanges(){
    this.ngModelChange.emit(this.customer);
  }

  writeValue(customer: Customer): void {
  }

  registerOnChange(fn: any): void {
    this.onChanges = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }

  setDisabledState(isDisabled: boolean): void {
  }

  public search(action: string = 'search') {

    if(action === 'search'){
      this.filter.page.number = 0;
    }

    this.loading = true;
    this.service.paginate(this.filter).subscribe(
      page => {
        this.page = page;
        this.loading = false;
      },
    );

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

  public paginate(number: number){
    this.filter.page.number = number;
    this.search('paginate');
  }

  reset(){
    this.filter.reset()
    this.search()
  }

}
