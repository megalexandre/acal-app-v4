import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '@model/default/_index';
import { NbToastrService } from '@nebular/theme';
import { DataService } from 'app/@shared/data.service';
import { CategoryComponent } from '../category.component';
import { CategoryService } from '../category.service';

@Component({
  templateUrl: './category-delete.component.html',
})
export class CategoryDeleteComponent extends CategoryComponent implements OnInit  {

  public title = "Deletar categoria"
  public category: Category;
  public id: string;
  public loaded: boolean = false;

  constructor(
    public data: DataService,
    public service: CategoryService,
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

    this.service.getById(this.id).subscribe(
      (category: Category)=> {
        this.category = category;
        this.loaded = true

      }
    )
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

