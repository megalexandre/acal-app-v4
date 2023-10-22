import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { CustomerComponent } from '../customer.component';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'ngx-customer-create',
  templateUrl: './customer-create.component.html',
})
export class CustomerCreateComponent extends CustomerComponent implements OnInit {

  public title: String = "Novo cliente";

  constructor(
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public service: CustomerService,
    public toastrService: NbToastrService,
    ) {
    super(formBuilder, activatedRoute, router, service, toastrService);
  }

  ngOnInit(): void {
    this.createForm()
  }

  public override commit(): void {
    this.service.save(this.form.value).subscribe(
      () => {
        this.toastrService.success(`Sucesso`, `Novo Registro adicionado`)
        this.router.navigate(['../list'],{relativeTo: this.activatedRoute})
      },
      (response) =>{
        this.toastrService.danger(`Não foi possivel realizar a ação`, response.error.message)
      }

    )
  }


}
