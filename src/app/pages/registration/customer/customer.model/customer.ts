import { PageFilter, Sort } from "@model/default/page-filter";

export interface CustomerPage {
  id: string,
  name: string,
  membershipNumber: string,
  documentNumber: string,
}

export class CustomerPageFilter extends PageFilter {
  id?: string = null;
  name?: string =  null;
  documentNumber?: string  = null;
  active?: boolean = null;
  personType?: PersonType = null;

  sort?: Sort = {
    field: "name",
    direction: "ASC"
  };
  
  reset(){
    super.reset()
    this.id = null;
    this.name = null;
    this.documentNumber = null;
    this.active = null;
    this.personType = null;
  }
}

export interface Customer {
  id: string,
  name: string,
  documentNumber: string,
  phoneNumbers: PhoneNumber[],
  personType: PersonType,
  birthDay: Date,
  membershipNumber?: string,
  active: boolean,
}

export interface PhoneNumber {
  preferential: boolean,
  number: String,
  isWhatApp: boolean,
}

export interface PersonType {
  name: 'INDIVIDUAL'|'LEGAL'
}

export interface CustomerPage {
  id: string,
  name: string,
  documentNumber: string,
}

export interface CustomerFilter {
  name?: string,
  document?: string,
}

export function createCustomerFilter(): CustomerFilter {
  return {
    name: null,
    document: null,
  };
}