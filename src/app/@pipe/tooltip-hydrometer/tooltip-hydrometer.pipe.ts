
import { Pipe, PipeTransform } from '@angular/core';
import { HydrometerPage } from 'app/pages/quality/hydrometer/hydrometer.model/hydrometer';
import { ReferencePipe } from '../reference/reference.pipe';

@Pipe({name: 'tooltipHydrometer'})
export class TooltipHydrometerPipe implements PipeTransform {

  constructor(public referencePipe: ReferencePipe){
    
  }

  transform(hydrometer: HydrometerPage): string {

    if(!hydrometer){
      return 
    }

    return "" +  
      this.referencePipe.transform(hydrometer.lastCollect.reference)  + " " + hydrometer.lastCollect.totalMeter + " " + 
      this.referencePipe.transform(hydrometer.reference)  +" "+ hydrometer.actualCollect.totalMeter + "" 
    }

}
