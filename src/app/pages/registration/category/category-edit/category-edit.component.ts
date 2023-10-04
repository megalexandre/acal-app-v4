import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '@model/default/_index';
import { NbToastrService } from '@nebular/theme';
import { DataService } from 'app/@shared/data.service';
import { CategoryComponent } from '../category.component';
import { CategoryService } from '../category.service';

@Component({
  selector: 'ngx-category-edit',
  templateUrl: './category-edit.component.html',
})
export class CategoryEditComponent extends CategoryComponent implements OnInit {

  public title: String = "Editar cliente";

  public category: Category;
  public id: string;
  public loaded: boolean = false;

  constructor(
    public data: DataService,
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public service: CategoryService,
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
      (category: Category)=> {
        this.category = category;
          this.createForm();
          this.patchFormValues(category)
          this.loaded = true
      }
    )

    this.createForm()
  }


  patchFormValues(category: Category){
    this.form.patchValue({
      name: category.name,
      waterValue: category.waterValue,
      categoryValue: category.categoryValue,
      type: category.type,
    });

    this.form.addControl('id', this.formBuilder.control(category.id));
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
