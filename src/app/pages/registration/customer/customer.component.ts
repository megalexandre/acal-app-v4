import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PhoneNumber } from 'app/pages/registration/customer/customer.model/customer';
import { NbToastrService } from '@nebular/theme';
import DateValidator from 'app/@validator/date.validator';
import DocumentValidator from 'app/@validator/document.validator';
import { phoneNumberPreferentialValidator } from 'app/@validator/phone-number-list.validator';
import { CustomerService } from './customer.service';
import { StatusComponent } from '@model/default/status';

@Component({
  selector: 'ngx-customer',
  template: '<router-outlet></router-outlet>',
})
export class CustomerComponent {

  public form: FormGroup;
  public submmited: boolean = false;
  public personTypeValue : 'INDIVIDUAL'|'LEGAL' = 'INDIVIDUAL';

  constructor(
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public service: CustomerService,
    public toastrService: NbToastrService) {
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      documentNumber: [null, [Validators.required, DocumentValidator.valid() ]],
      personType: ["INDIVIDUAL"],
      birthDay: [null],
      membershipNumber: [null, Validators.required],
      phoneNumbers: this.formBuilder.array([], phoneNumberPreferentialValidator()),
    })
  }

  public togglePersonType(){

    if(this.personTypeValue === 'LEGAL'){
      this.personTypeValue = 'INDIVIDUAL'
      this.membershipNumber.addValidators(Validators.required)
    } else {
      this.personTypeValue = 'LEGAL';
      this.membershipNumber.clearValidators();
    }

    this.membershipNumber.updateValueAndValidity()
    this.personType.setValue(this.personTypeValue);
    this.documentNumber.setValue(null);
  }

  addPhoneNumber(value: PhoneNumber = null) {
    const newPhoneNumber = this.formBuilder.group({
      preferential: [value?.preferential],
      number: [value?.number, Validators.required],
      isWhatApp: [value?.isWhatApp]
    });

    this.phoneNumbers.push(newPhoneNumber);
  }

  removePhoneNumber(index: number) {
    this.phoneNumbers.removeAt(index);
  }

  public submit(){
    this.submmited = true;

    if(this.form.invalid){
      return
    }

    this.commit();
  }

  public commit(){}

  public setBirthDay(date: Date | null){
    this.birthDay.setValue(date);
  }

  public setBirthDayTouched(){
    this.birthDay.markAllAsTouched()
  }

  public back(){
    this.router.navigate(['../list'],{relativeTo: this.activatedRoute})
  }

  public getStatus(value: string): StatusComponent {

    if(this.form.get(value).valid && (this.form.get(value).touched || (this.submmited) )){
      return 'success'
    } else if (!this.form.get(value).valid &&  (this.form.get(value).touched || (this.submmited))){
      return 'danger'
    }

    return 'basic'
  }

  get name(): AbstractControl {
    return this.form.get('name')
  }

  get personType(): AbstractControl {
    return this.form.get('personType')
  }

  get birthDay(): AbstractControl {
    return this.form.get('birthDay')
  }

  get phoneNumber(): AbstractControl {
    return this.form.get('phoneNumber')
  }

  get documentNumber(): AbstractControl {
    return this.form.get('documentNumber')
  }

  get membershipNumber(): AbstractControl {
    return this.form.get('membershipNumber')
  }

   get phoneNumbers(): FormArray {
    return this.form.get('phoneNumbers') as FormArray;
  }

}
