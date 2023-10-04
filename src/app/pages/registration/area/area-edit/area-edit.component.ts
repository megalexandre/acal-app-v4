import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { DataService } from 'app/@shared/data.service';
import { AreaComponent } from '../area.component';
import { AreaService } from '../area.service';
import { Area } from '@model/default/area';

@Component({
  templateUrl: './area-edit.component.html',
})
export class AreaEditComponent extends AreaComponent implements OnInit {

  public title: String = "Editar Área";

  public area: Area;
  public id: string;
  public loaded: boolean = false;

  constructor(
    public data: DataService,
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public service: AreaService,
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
      (area: Area)=> {
        this.area = area;
          this.createForm();
          this.patchFormValues(area)
          this.loaded = true
      }
    )

    this.createForm()
  }


  patchFormValues(area: Area){
    this.form.patchValue({
      name: area.name,
    });

    this.form.addControl('id', this.formBuilder.control(area.id));
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
