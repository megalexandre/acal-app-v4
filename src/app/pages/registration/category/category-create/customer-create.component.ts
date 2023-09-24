import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { CategoryComponent } from '../category.component';
import { CategoryService } from '../category.service';

@Component({
  selector: 'ngx-category-create',
  templateUrl: './category-create.component.html',
})
export class CategoryCreateComponent extends CategoryComponent implements OnInit {

  public title: String = "Nova Categoria";

  constructor(
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public service: CategoryService,
    public toastrService: NbToastrService,
    ) {
    super(formBuilder, activatedRoute, router, service, toastrService);
  }

  ngOnInit(): void {
    this.createForm()
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


}
