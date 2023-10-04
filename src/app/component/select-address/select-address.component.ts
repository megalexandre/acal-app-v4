import { filter } from 'rxjs/operators';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Address } from '@model/default/address';
import { AddressService } from 'app/pages/registration/address/address.service';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const OUTROS = 5
@Component({
  selector: 'ngx-select-address',
  templateUrl: './select-address.component.html',
  styleUrls: ['./select-address.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SelectAddressComponent
    }
  ]
})
export class SelectAddressComponent implements ControlValueAccessor, OnInit {

  value: SelectAddressComponent;
  disabled = false;

  onChange = (value: SelectAddressComponent) => {};
  onTouched = () => {};


  @Input()
  public status: string = 'basic';

  @Input()
  public showTitle: Boolean = true

  @Input()
  public addSelectOption: Boolean = false

  @Input()
  public address: Address;

  @Output()
  public addressChange = new EventEmitter()

  public groups: {name:string; values: Address[] }[] = []

  public adresses: Address[]

  public loaded = false;

  private defaulValues = ['Avenida','Rua','Fazenda', 'Travessa','Praça', 'Outros']

  constructor(private service: AddressService) {
    this.defaulValues.forEach(name=>{
      this.groups.push({name: name, values:[]})
    })
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: SelectAddressComponent): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {

    this.service.list().subscribe(
      (adresses: Address[])=>{
        this.loaded = true;
      }
    );

  }


  selectedChange(address: Address){
    this.addressChange.emit(address)
  }

  compareById(v1: Address, v2: Address): boolean {
    return v1?.id === v2?.id;
  }
}
