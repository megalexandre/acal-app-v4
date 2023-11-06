import { Pipe, PipeTransform } from '@angular/core';
import { Month } from 'app/@shared/month.enum';

@Pipe({name: 'month', pure: true})
export class MonthPipe implements PipeTransform {

  transform(month: String): string {

    if(!month){
      return;
    }

    return Month[month.toLocaleLowerCase()];
  }
}
