import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { DataService } from 'app/@shared/data.service';
import { HydrometerComponent } from '../hydrometer.component';
import { HydrometerService } from '../hydrometer.service';
import { Hydrometer } from '../hydrometer.model/hydrometer';

@Component({
  templateUrl: './hydrometer-delete.component.html',
})
export class HydrometerDeleteComponent extends HydrometerComponent implements OnInit  {

  public title = "Deletar Hydrometer"
  public hydrometer: Hydrometer;
  public id: string;
  public loaded: boolean = false;

  constructor(
    public data: DataService,
    public service: HydrometerService,
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

    this.service.getById(this.id).subscribe()
  }

  override commit(): void {
    this.service.delete(this.id).subscribe(
      () => {
        this.toastrService.success(`Sucesso`, `Registro Excluido`)
        this.router.navigate(['../list'],{relativeTo: this.activatedRoute})
      },
      (response) =>{
        this.toastrService.danger(response.error.detail, `Não foi possivel realizar a ação`)
      }
      )
  }

}

