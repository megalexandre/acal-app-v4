
import { Pipe, PipeTransform } from '@angular/core';
import { HydrometerPage } from 'app/pages/quality/hydrometer/hydrometer.model/hydrometer';
import { ReferencePipe } from '../reference/reference.pipe';
import { DecimalPipe } from '@angular/common';

@Pipe({name: 'tooltipHydrometer'})
export class TooltipHydrometerPipe implements PipeTransform {

  constructor(
    public referencePipe: ReferencePipe,
    public decimalPipe: DecimalPipe
    ){
    
  }

  transform(hydrometer: HydrometerPage): string {

    if(!hydrometer){
      return 
    }

    return "" +  
      this.referencePipe.transform(hydrometer.lastCollect.reference)  + ": " + 
      this.decimalPipe.transform(hydrometer.lastCollect.totalMeter) + " "+ 
      this.referencePipe.transform(hydrometer.reference)  +": "+ 
      this.decimalPipe.transform(hydrometer.actualCollect.totalMeter) 
    }

}
