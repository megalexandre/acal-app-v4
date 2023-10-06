import { PageFilter } from "./page-filter";

export interface Customer {
  id: string,
  name: string,
  documentNumber: string,
  phoneNumbers: PhoneNumber[],
  personType: PersonType,
  birthDay: string,
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

export class CustomerPageFilter extends PageFilter {
  id?: string = null;
  name?: string =  null;
  documentNumber?: string  = null;
  active?: boolean = null;
  personType?: PersonType = null;

  reset(){
    super.reset()
    this.id = null;
    this.name = null;
    this.documentNumber = null;
    this.active = null;
    this.personType = null;
  }
}

export interface CustomerPage {
  id: string,
  name: string,
  documentNumber: string,
  membershipNumber?: string,
}

export interface CustomerFilter {
  name: string,
  document: string,
}


