import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { LinkService } from './link.service';

@Component({
  template: '<router-outlet></router-outlet>',
})
export class LinkComponent {

  public form: FormGroup;
  public submmited: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public service: LinkService,
    public toastrService: NbToastrService) {
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      category: [null, Validators.required],
      address: [null, Validators.required],
      addressMail: [null, Validators.required],
      customer: [null, Validators.required],
      createdBy: ['', Validators.required],
    })
  }

  public getStatus(value: string): ('success'|'basic'|'danger') {

    if(this.form.get(value).valid && (this.form.get(value).touched || (this.submmited) )){
      return 'success'
    } else if (!this.form.get(value).valid &&  (this.form.get(value).touched || (this.submmited))){
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

  get category(): AbstractControl {
    return this.form.get('category')
  }

  get address(): AbstractControl {
    return this.form.get('address')
  }

  get addressMail(): AbstractControl {
    return this.form.get('addressMail')
  }

  get customer(): AbstractControl {
    return this.form.get('customer')
  }

}
