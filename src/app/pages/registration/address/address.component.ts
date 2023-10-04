import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { AddressService } from './address.service';

@Component({
  template: '<router-outlet></router-outlet>',
})
export class AddressComponent {

  public form: FormGroup;
  public submmited: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public service: AddressService,
    public toastrService: NbToastrService) {
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      area: [null, Validators.required],
      number: [null, Validators.required],
      letter: [null, Validators.required],
      hasHydrometer: [null, Validators.required],
    })
  }


  public getStatus(value: string): ('success'|'basic'|'danger') {

    if(this.form.get(value).valid && (this.submmited) ){
      return 'success'
    } else if (!this.form.get(value).valid && (this.submmited)){
      return 'danger'
    }

    return 'basic'
  }


  public submit(){
    this.submmited = true;

    if(this.form.invalid){
      return
    }

    this.commit();
  }

  public commit(){}

  public back(){
    this.router.navigate(['../list'],{relativeTo: this.activatedRoute})
  }

  get area(): AbstractControl {
    return this.form.get('area')
  }

  get number(): AbstractControl {
    return this.form.get('number')
  }

  get letter(): AbstractControl {
    return this.form.get('letter')
  }

  get hasHydrometer(): AbstractControl {
    return this.form.get('hasHydrometer')
  }

}
