import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { DefaultService } from 'app/@shared/default.service';
import { Customer, CustomerFilter, CustomerPage, CustomerPageFilter } from 'app/pages/registration/customer/customer.model/_index';

@Injectable()
export class CustomerService extends DefaultService<Customer, CustomerFilter, CustomerPage, CustomerPageFilter> {

  public get env(): string {
    return `${environment.customer}`
  }

  constructor(http: HttpClient) {
    super(http)
  }


}
