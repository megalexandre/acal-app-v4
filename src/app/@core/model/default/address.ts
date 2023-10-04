import { Area } from "./area";
import { PageFilter } from "./page-filter";

export interface Address {
  id: string,
  area: Area,
  number: string,
  letter: string,
  hasHydrometer: boolean,
}

export interface AddressFilter {
  id: string,
  area: Area,
  number: string,
  letter: string,
  hasHydrometer: boolean,
}

export interface AddressPage {
  id: string,
  area: Area,
  number: string,
  letter: string,
}

export class AddressPageFilter extends PageFilter {
  id?: string = null;
  area?: Area = null;
  number?: string = null;
  letter?: string = null;
  hasHydrometer?: boolean = null;

  reset(){
    super.reset();
    this.id = null;
    this.area = null;
    this.number = null;
    this.letter = null;
    this.hasHydrometer = null;
  }
}






