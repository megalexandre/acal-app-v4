import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '@model/default/_index';
import { NbToastrService } from '@nebular/theme';
import { DataService } from 'app/@shared/data.service';
import { AddressComponent } from '../address.component';
import { AddressService } from '../address.service';

@Component({
  templateUrl: './address-delete.component.html',
})
export class AddressDeleteComponent extends AddressComponent implements OnInit  {

  public title = "Deletar Área"
  public address: Address;
  public id: string;
  public loaded: boolean = false;

  constructor(
    public data: DataService,
    public service: AddressService,
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public toastrService: NbToastrService,
  ) {
    super(formBuilder, activatedRoute, router, service, toastrService )
  }

  ngOnInit(): void {
    this.id = this.data.id
    if(!this.id){
      super.back()
    }

    this.service.getById(this.id).subscribe(
      (address: Address)=> {
        this.address = address;
        this.loaded = true

      }
    )
  }

  override commit(): void {
    this.service.delete(this.id).subscribe(
      () => {
        this.toastrService.success(`Sucesso`, `Registro Excluido`)
        this.router.navigate(['../list'],{relativeTo: this.activatedRoute})
      },
      (response) =>{
        this.toastrService.danger(response.error.detail, `Não foi possivel realizar a ação`)
      }
      )
  }

}

