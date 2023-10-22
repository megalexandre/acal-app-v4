import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'app/pages/registration/customer/customer.model/customer';
import { NbToastrService } from '@nebular/theme';
import { DataService } from 'app/@shared/data.service';
import { CustomerComponent } from '../customer.component';
import { CustomerService } from './../customer.service';

@Component({
  selector: 'ngx-customer-edit',
  templateUrl: './customer-edit.component.html',
})
export class CustomerEditComponent extends CustomerComponent implements OnInit {

  public title: String = "Editar cliente";
  public customer: Customer;
  public id: string;
  public loaded: boolean = false;

  constructor(
    public data: DataService,
    public service: CustomerService,
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
      (customer: Customer)=> {
        this.customer = customer;
          this.createForm();
          this.patchFormValues(customer)
          this.loaded = true
      }
    )
  }

  override createForm(): void {
    super.createForm();

  }

  patchFormValues(customer: Customer){
    this.form.patchValue({
      name: customer.name,
      documentNumber: customer.documentNumber,
      birthDay: customer.birthDay,
      membershipNumber: customer.membershipNumber,
    });

    customer.phoneNumbers?.forEach(item =>{
        super.addPhoneNumber(item)
    })

    this.form.addControl('id', this.formBuilder.control(customer.id));
  }

  public override commit(): void {
    this.service.update(this.form.value).subscribe(
      () => {
        this.toastrService.success(`Sucesso`, `Registro Atualizado`)
        this.router.navigate(['../list'],{relativeTo: this.activatedRoute})
      },
      (response) =>{
        this.toastrService.danger(response.error.detail, `Não foi possivel realizar a ação`)
      }

    )
  }

}
