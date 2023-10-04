import { PageFilter } from "./page-filter";

export interface Area {
  id: string,
  name: string,
}

export interface AreaFilter {
  id: string,
  name?: string;
}

export interface AreaPage {
  id: string,
  name: string,
}

export class AreaPageFilter extends PageFilter {
  id?: string = null;
  name?: string = null;

  reset(){
    super.reset();
    this.id = null;
    this.name = null;
  }
}






