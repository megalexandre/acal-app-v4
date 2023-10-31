import { Pipe, PipeTransform } from '@angular/core';
import { Reference } from '@model/default/reference';
import { MonthPipe } from '../month/month.pipe';

@Pipe({name: 'reference', pure: true})
export class ReferencePipe implements PipeTransform {

  constructor(public monthPipe: MonthPipe){

  }

  transform(reference: Reference): string {

    if(!reference){
      return;
    }

    return this.monthPipe.transform(reference.month) +"/"+ reference.year;
  }

}
