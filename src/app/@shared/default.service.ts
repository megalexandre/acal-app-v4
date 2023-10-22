import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Page } from '@model/page';
import { Observable } from 'rxjs';

export abstract class DefaultService <
  M,
  Filter,
  ModelPage,
  FilterPage,
> {

  public abstract env: String

  constructor(public http: HttpClient) { }

  public paginate(filterPage: any): Observable<Page<ModelPage>>{
    return this.http.post<Page<ModelPage>>(`${this.env+'/paginate'}`, filterPage);
  }

  public list(): Observable<M[]>{
    return this.http.get<M[]>(`${this.env + '/all'}`);
  }

  public getReport(filter: Filter){
    return this.http.post<any>(`${this.env}/report`, filter, { 'responseType': 'arraybuffer' as 'json' })
  }

  public getReportById(id: string): Observable<Blob>{
    return this.http.post<any>(`${this.env}/report/${id}`,  {responseType: 'blob'} )
  }

  public getPage(filterPage: any): Observable<Page<ModelPage>>{
    return this.http.post<Page<ModelPage>>(`${this.env+'/paginate'}`, filterPage);
  }


  public filterAll(filter: Filter): Observable<M[]>{
    return this.http.post<M[]>(`${this.env + '/list'}`, filter);
  }

  public getById(id: string): Observable<M>{
    return this.http.get<M>(`${this.env+'/'}${id}`);
  }

  public update(model: M): Observable<M>{
    return this.http.put<M>(`${this.env}`, model);
  }

  public delete(id: string): Observable<M>{
    return this.http.delete<M>(`${this.env}/${id}`);
  }

  public save(model: M): Observable<M>{
    return this.http.post<M>(`${this.env}`, model);
  }

  public saveAll(model: M[]): Observable<M[]>{
    return this.http.post<M[]>(`${this.env}`, model);
  }
}
