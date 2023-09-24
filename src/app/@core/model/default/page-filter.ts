export interface Page{
  number?: number,
  size?: number,
}

export interface Sort{
    field?: string,
    direction?: string,
}

export class PageFilter{

  page?: Page = {
    number: 0,
    size: 10,
  };

  sort?: Sort = {
    field: "id",
    direction: "ASC"
  };

  reset(){
    this.page = { number: 0, size: 10};
    this.sort = { field: "id", direction: "ASC"};
  }

}
