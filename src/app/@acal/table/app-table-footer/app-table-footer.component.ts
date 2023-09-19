import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Page } from '@model/page';

@Component({
  selector: 'ngx-app-table-footer',
  templateUrl: './app-table-footer.component.html',
  styleUrls: ['./app-table-footer.component.scss']
})
export class AppTableFooterComponent implements OnInit, OnChanges {

  @Input()
  public page: Page<any>

  @Output()
  public search = new EventEmitter<number>();

  public disableBackAction: boolean = false;
  public disableFowardAction: boolean = false;

  ngOnInit(): void {
    this.updateDisabled()
  }

  ngOnChanges(): void {
    this.updateDisabled();
  }

  updateDisabled(){
    this.disableBackAction = (this.page.pageable.pageNumber == 0)
    this.disableFowardAction = (this.page.pageable.pageNumber + 1 == this.page.totalPages)
  }

  public firstPage(){
    if(this.page.pageable.pageNumber == 0 ){
      return;
    }
    this.searchAction(0)
  }

  searchAction(value: number) {
    this.search.emit(value);
  }

  backPage(){
    if(this.page.pageable.pageNumber == 0){
      return;
    }

    this.searchAction(this.page.pageable.pageNumber-1)
  }

  forwardPage(){
    if(this.page.pageable.pageNumber >= (this.page.totalPages -1)){
      return;
    }

    this.searchAction(this.page.pageable.pageNumber+1)
  }

  lastPage(){
    if(this.page.pageable.pageNumber ==this.page.totalPages -1){
      return;
    }

    this.searchAction(this.page.totalPages -1)
  }
}
