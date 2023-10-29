import { CategoryType } from "@model/default/category";

export interface CategoryPick {
    id: string,
    waterValue: number,
    categoryValue: number,
    name: string,
    type: CategoryType,
}

export interface CategoriesGroups{
    name: string,
    categories: CategoryPick[],
}