import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import DateValidator from 'app/@validator/date.validator';
import DocumentValidator from 'app/@validator/document.validator';
import { CustomerComponent } from '../customer.component';
import { CustomerService } from '../customer.service';
import { phoneNumberPreferentialValidator } from 'app/@validator/phone-number-list.validator';

@Component({
  selector: 'ngx-customer-create',
  templateUrl: './customer-create.component.html',
})
export class CustomerCreateComponent extends CustomerComponent implements OnInit {

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

  override createForm(): void {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      documentNumber: [null, [Validators.required, DocumentValidator.valid() ]],
      personType: ["INDIVIDUAL"],
      birthDay: [null, [DateValidator.valid()]],
      membershipNumber: [null, Validators.required],

      phoneNumbers: this.formBuilder.array([], phoneNumberPreferentialValidator()),
    })
  }

  addPhoneNumber() {
    const newPhoneNumber = this.formBuilder.group({
      preferential: [false],
      number: ['', Validators.required],
      isWhatApp: [false]
    });

    this.phoneNumbers.push(newPhoneNumber);
  }

  removePhoneNumber(index: number) {
    this.phoneNumbers.removeAt(index);
  }


  public override commit(): void {
    this.service.save(this.form.value).subscribe(
      () => {
        this.toastrService.success(`Sucesso`, `Novo Registro adicionado`)
        this.router.navigate(['../list'],{relativeTo: this.activatedRoute})
      },
      (response) =>{
        this.toastrService.danger(response.error.detail, `Não foi possivel realizar a ação`)
      }

    )
  }

  get phoneNumbers(): FormArray {
    return this.form.get('phoneNumbers') as FormArray;
  }

}
