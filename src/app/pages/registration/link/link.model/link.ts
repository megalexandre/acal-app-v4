import { Address } from "@model/default/address";
import { Area } from "@model/default/area";
import { Category, CategoryFilter, createCategoryFilter } from "@model/default/category";
import { PageFilter } from "@model/default/page-filter";
import { Customer, CustomerFilter, createCustomerFilter } from "app/pages/registration/customer/customer.model/customer";

export interface Link {
  id: string,
  category: Category,
  address: Address,
  mailAddress: Address,
  customer: Customer,
  active: Boolean,
  startedAt: string,
  finishedAt: string,
  createdBy: string,
}

export interface LinkFilter {
  id: string,
  category: Category,
  address: Address,
  mailAddress: Address,
  customer: Customer,
  active: Boolean,
  startedAt: string,
  finishedAt: string,
  createdBy: string,
}

export interface LinkPage {
  id: string,
  address: Address,
  customerName: String,
  customerDocument: String,
  categoryName: String,
  categoryTotal: Number,
  categoryType: String,
  addressName: String,
  addressDetail: String,
}

export class LinkPageFilter extends PageFilter {
  id?: string = null;
  customer?: CustomerFilter = createCustomerFilter();
  category?: CategoryFilter = createCategoryFilter();
  
  address?: Address = null;
  area?: Area = null;
  mailAddress?: Address = null;
  active?: Boolean = null;
  startedAt?: string = null;
  finishedAt?: string = null;
  createdBy?: string = null;

  reset(){
    super.reset();
    this.id = null;
    this.customer = createCustomerFilter();
    this.category = createCategoryFilter();
    this.address = null;
    this.area = null;
    this.mailAddress = null;
    this.active = null;
    this.startedAt = null;
    this.finishedAt = null;
    this.createdBy = null;
  }

}


