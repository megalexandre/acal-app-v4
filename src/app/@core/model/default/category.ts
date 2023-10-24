import { PageFilter } from "./page-filter";

export type CategoryType = 'FOUNDER'|'EFFECTIVE'|'TEMPORARY'

export const Categories: {name: string}[] = [
  {name: 'FOUNDER'},
  {name: 'EFFECTIVE'},
  {name: 'TEMPORARY'}
]

export const CategoryMap: { [key: string]: string } = {
  'FOUNDER': 'Fundador',
  'EFFECTIVE': 'Efetivo',
  'TEMPORARY': 'Temporário',
};

export interface Category {
  id: string,
  waterValue: number,
  categoryValue: number,
  name: string,
  type: CategoryType,
}

export interface CategoryFilter {
  id: string,
  name?: string;
  waterValue: number,
  categoryValue: number,
  type?: CategoryType;
}

export interface CategoryPage {
  id: string,
  waterValue: number,
  categoryValue: number,
  name: string,
  type: CategoryType,
}

export class CategoryPageFilter extends PageFilter {
  id?: string = null;
  name?: string = null;
  waterValue?: number = null;
  categoryValue?: number = null;
  totalValue?: number = null;
  type?: CategoryType = null;

  reset(){
    super.reset();
    this.id = null;
    this.name = null;
    this.waterValue = null;
    this.categoryValue = null;
    this.totalValue = null,
    this.type = null;
  }
}

export function createCategoryFilter(): CategoryFilter {
  return {
    id: null,
    name: null,
    waterValue: null,
    categoryValue: null,
    type: null,
  };
}


