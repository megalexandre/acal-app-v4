import { Address, Area, Category, Customer } from "./_index";
import { PageFilter } from "./page-filter";

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
  category?: Category= null;
  address?: Address = null;
  area?: Area = null;
  mailAddress?: Address = null;
  customer?: Customer = null;
  active?: Boolean = null;
  startedAt?: string = null;
  finishedAt?: string = null;
  createdBy?: string = null;

  reset(){
    super.reset();
    this.id = null;
    this.category = null;
    this.address = null;
    this.area = null;
    this.mailAddress = null;
    this.customer = null;
    this.active = null;
    this.startedAt = null;
    this.finishedAt = null;
    this.createdBy = null;
  }

}


