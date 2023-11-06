import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { HydrometerService } from './hydrometer.service';

@Component({
  template: '<router-outlet></router-outlet>',
})
export class HydrometerComponent {

  public form: FormGroup;
  public submmited: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public service: HydrometerService,
    public toastrService: NbToastrService) {
  }

  createForm(): void {
    this.form = this.formBuilder.group({
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


}
