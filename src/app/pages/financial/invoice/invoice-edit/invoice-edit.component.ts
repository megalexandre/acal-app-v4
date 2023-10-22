import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { DataService } from 'app/@shared/data.service';
import { InvoiceComponent } from '../invoice.component';
import { InvoiceService } from '../invoice.service';
import { Invoice } from '@model/default/invoice';

@Component({
  templateUrl: './invoice-edit.component.html',
})
export class InvoiceEditComponent extends InvoiceComponent implements OnInit {

  public title: String = "Editar Área";

  public invoice: Invoice;
  public id: string;
  public loaded: boolean = false;

  constructor(
    public data: DataService,
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public service: InvoiceService,
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
      (invoice: Invoice)=> {
        this.invoice = invoice;
          this.createForm();
          this.patchFormValues(invoice)
          this.loaded = true
      }
    )

    this.createForm()
  }


  patchFormValues(invoice: Invoice){
    this.form.patchValue({
    });

    this.form.addControl('id', this.formBuilder.control(invoice.id));
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
