
import { Pipe, PipeTransform } from '@angular/core';
import { Address } from '@model/default/address';

@Pipe({name: 'address'})
export class AddressPipe implements PipeTransform {

  transform(address: Address): string {

    if(!address){
      return 
    }

    return address.area.name + ": " + address.number +"/"+ address.letter
  }

}
