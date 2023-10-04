import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '@model/default/_index';
import { NbToastrService } from '@nebular/theme';
import { DataService } from 'app/@shared/data.service';
import { AddressComponent } from '../address.component';
import { AddressService } from '../address.service';

@Component({
  templateUrl: './address-edit.component.html',
})
export class AddressEditComponent extends AddressComponent implements OnInit {

  public title: String = "Editar Endereço";

  public adress: Address;
  public id: string;
  public loaded: boolean = false;

  constructor(
    public data: DataService,
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public service: AddressService,
    public toastrService: NbToastrService,
    ) {
    super(formBuilder, activatedRoute, router, service, toastrService);
  }

  ngOnInit(): void {
    this.id = this.data.id
    if(!this.id){
      super.back()
    }

    this.service.getById(this.id).subscribe(
      (adress: Address)=> {
        this.adress = adress;
          this.createForm();
          this.patchFormValues(adress)
          this.loaded = true
      }
    )

    this.createForm()
  }


  patchFormValues(adress: Address){
    this.form.patchValue({
      number: adress.number,
      area: adress.area,
      letter: adress.letter,
      hasHydrometer: adress.hasHydrometer,
    });

    this.form.addControl('id', this.formBuilder.control(adress.id));
  }

  public override commit(): void {
    this.service.update(this.form.value).subscribe(
      () => {
        this.toastrService.success(`Sucesso`, `Registro Editado`)
        this.router.navigate(['../list'],{relativeTo: this.activatedRoute})
      },
      (response) =>{
        this.toastrService.danger(`Não foi possivel realizar a ação`, response.error.cause,)
      }
    )
  }

}
