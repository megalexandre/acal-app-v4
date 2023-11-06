import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { DataService } from 'app/@shared/data.service';
import { LinkComponent } from '../hydrometer.component';
import { LinkService } from '../hydrometer.service';
import { Link } from 'app/pages/registration/link/link.model/link';

@Component({
  templateUrl: './link-edit.component.html',
})
export class LinkEditComponent extends LinkComponent implements OnInit {

  public title: String = "Editar Área";

  public link: Link;
  public id: string;
  public loaded: boolean = false;

  constructor(
    public data: DataService,
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public service: LinkService,
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
      (link: Link)=> {
        this.link = link;
          this.createForm();
          this.patchFormValues(link)
          this.loaded = true
      }
    )

    this.createForm()
  }

  patchFormValues(link: Link){
    this.form.patchValue({
      active: link.active,
    });

    this.form.addControl('id', this.formBuilder.control(link.id));
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
