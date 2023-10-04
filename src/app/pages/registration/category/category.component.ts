import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { CategoryService } from './category.service';

@Component({
  template: '<router-outlet></router-outlet>',
})
export class CategoryComponent {

  public form: FormGroup;
  public submmited: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public service: CategoryService,
    public toastrService: NbToastrService) {
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      waterValue: [null, Validators.required],
      categoryValue: [null, Validators.required],
      type: [null, Validators.required],
    })
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

  public getStatus(value: string): ('success'|'basic'|'danger') {

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

  get waterValue(): AbstractControl {
    return this.form.get('waterValue')
  }

  get categoryValue(): AbstractControl {
    return this.form.get('categoryValue')
  }

  get type(): AbstractControl {
    return this.form.get('type')
  }

}
