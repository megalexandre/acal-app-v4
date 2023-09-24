



export interface Group {
  id: string,
  value: number,
  CategoryOLDValue: number,
  name: string,
  CategoryOLD: CategoryOLD,
}

export interface GroupFilter {
  name?: string;
  document?: string;
  CategoryOLD?: CategoryOLD ;
  CategoryOLDValue?: number;
  value?: number;
}

export interface GroupPage {
  id: string,
  value: number,
  CategoryOLDValue: number,
  name: string,
  CategoryOLD: CategoryOLD,
}

export class GroupPageFilter {
  name?: string = '';
  document?: string = '';
  CategoryOLD?: CategoryOLD = null;
  CategoryOLDValue?: number = null;
  value?: number = null;

  page: number = 0;
  pageSize: number = 10;
  direction: string = 'ASC';
  sortedField: string = 'id';

  reset(){
    this.name = '';
    this.document = '';
    this.CategoryOLD = null;
    this.value = null;
    this.CategoryOLDValue = null;

    this.page = 0;
    this.pageSize = 10;
    this.direction = 'ASC';
    this.sortedField = 'id';
  }
}

export interface CategoryOLD {
  name: 'FOUNDER'|'EFFECTIVE'|'TEMPORARY',
}

export interface GroupPage {}




