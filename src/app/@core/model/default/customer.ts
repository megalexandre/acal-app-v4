export interface Customer {
  id: string,
  name: string,
  document: string,
  phoneNumber: string,
  birthDay: string,
  membershipNumber?: string,
  personType: PersonType
}

export interface PersonType {
  name: 'INDIVIDUAL'|'LEGAL'
}


export interface Page{
  number?: number,
  size?: number,
}

export interface Sort{
    field?: string,
    direction?: string,
}

export class CustomerPageFilter {
  id?: string = null;
  name?: string =  null;
  documentNumber?: string  = null;
  active?: boolean = null;
  personType?: PersonType = null;

  page?: Page = {
    number: 0,
    size: 10,
  };

  sort?: Sort = {
    field: "id",
    direction: "ASC"
  };

  reset(){
    this.id = null;
    this.name = null;
    this.documentNumber = null;
    this.active = null;
    this.personType = null;
    this.page = { number: 0, size: 10};
    this.sort = { field: "id", direction: "ASC"};
  }
}

export interface CustomerPage {
  id: string,
  name: string,
  documentNumber: string,
}

export interface CustomerFilter {
  name: string,
  document: string,
}


