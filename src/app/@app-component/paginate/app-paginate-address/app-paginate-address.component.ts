import { Component, EventEmitter, forwardRef, OnChanges, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Address, AddressPage, AddressPageFilter } from '@model/default/address';
import { Page } from '@model/page';
import { AddressService } from 'app/pages/registration/address/address.service';

@Component({
  selector: 'app-paginate-address',
  templateUrl: './app-paginate-address.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppPaginateAddressComponent),
      multi: true
    }
  ]
})
export class AppPaginateAddressComponent implements ControlValueAccessor{

  @Output()
  public ngModelChange: EventEmitter<Address | null> = new EventEmitter<Address | null>();

  public filter: AddressPageFilter = new AddressPageFilter()
  public page: Page<AddressPage>;
  public loading: boolean =  false;
  public address: Address | null = null

  constructor(
    public service: AddressService,
    ){
  }

  public emit(address: Address){
    this.address = address;
    this.onChanges();
  }

  onTouch(){

  }

  onChanges(){
    this.ngModelChange.emit(this.address);
  }


  writeValue(address: Address): void {
  }

  registerOnChange(fn: any): void {
    this.onChanges = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }

  setDisabledState?(isDisabled: boolean): void {
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
