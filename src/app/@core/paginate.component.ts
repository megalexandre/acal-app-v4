import { ActivatedRoute, Router } from "@angular/router";
import { Page } from "@model/page";
import { DataService } from "app/@shared/data.service";
import { DefaultService } from "app/@shared/default.service";

export type Action = {
  name: 'search'|'add'|'edit'|'view'|'paginate'|'list'|'delete'
}

export abstract class PaginateComponent{

  public loading: boolean =  false;

  public page: Page<any>;
  public abstract filter: any

  constructor(
    public service: DefaultService<any, any, any, any>,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public data: DataService,
    ){
  }

  init(): void {
    this.search();
  }

  public search(action: Action = {name: 'search'}) {

    if(action.name === 'search'){
      this.filter.page.number = 0;
    }

    this.loading = true;
    this.service.paginate(this.prepareDataForSearch()).subscribe(
      page => {
        this.page = page;
        this.loading = false;
      },
    );

  }

  public prepareDataForSearch(): any {
    return this.filter
  }

  public order(field: string){
    this.filter.sort.field = field

    this.toogleDirection();
    this.search();
  }


  private toogleDirection(){
    if(this.filter.sort.direction ===  'ASC') {
      this.filter.sort.direction = 'DESC';
    } else {
      this.filter.sort.direction = 'ASC';
    }
  }

  public paginate(number: number){
    this.filter.page.number = number;
    this.search({name: 'paginate'});
  }

  reset(){
    this.filter.reset()
    this.search()
  }

  public create(){
    this.router.navigate(['../create'],{relativeTo: this.activatedRoute})
  }

  public edit(id: string){
    this.data.setId = id
    this.router.navigate(['../edit'],{relativeTo: this.activatedRoute})
  }

  public remove(id: string){
    this.data.setId = id
    this.router.navigate(['../delete'],{relativeTo: this.activatedRoute})
  }

  public view(id: string){
    this.data.setId = id
    this.router.navigate(['../view'],{relativeTo: this.activatedRoute})
  }

}
