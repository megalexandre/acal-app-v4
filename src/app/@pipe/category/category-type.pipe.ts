import { Pipe, PipeTransform } from '@angular/core';
import { CategoryMap } from '@model/default/_index';

@Pipe({name: 'categoryType'})
export class CategoryTypePipe implements PipeTransform {

  transform(value: string): string {
    return CategoryMap[value] || value;
  }

}
