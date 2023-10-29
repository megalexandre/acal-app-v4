import { Component, EventEmitter, Output } from '@angular/core';
import { Address } from '@model/default/address';
import { AddressService } from 'app/pages/registration/address/address.service';
import { AddressPick, Groups } from './address.group';

@Component({
  selector: 'app-address-pick',
  templateUrl: './app-address-pick.component.html',
  styleUrls: ['./app-address-pick.component.scss'],
})
export class AppAddressPickComponent  {

  @Output()
  public ngModelChange: EventEmitter<Address | null> = new EventEmitter<Address | null>()
  
  public loaded = false;
  public groups: Groups<AddressPick>[] = [];

  constructor(public service: AddressService){
    this.service.list().subscribe(
      (address: AddressPick[]) => {
        this.createGroups(address)
        this.loaded = true
      }
    )
  }

  createGroups(address: Address[]): void{
    const names = Array.from(new Set(address.map((address:Address) => address.area.name ))).sort( (a,b)=> a.localeCompare(b) )

    names.forEach(
      (name) =>{
        this.groups.push({
          name: name,
          values: address.filter((address) => address.area.name === name ).sort((a,b) => a.letter.localeCompare(b.letter))
        })
      }
    )
  }

  selectedChange(address: Address | null){
    this.ngModelChange.emit(address)
  }

}
