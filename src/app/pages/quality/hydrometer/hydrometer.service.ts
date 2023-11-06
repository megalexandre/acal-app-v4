import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { DefaultService } from 'app/@shared/default.service';
import { CreateHydrometer, Hydrometer, HydrometerFilter, HydrometerPage, HydrometerPageFilter } from './hydrometer.model/hydrometer';
import { Observable } from 'rxjs';

@Injectable()
export class HydrometerService extends DefaultService<Hydrometer, HydrometerFilter, HydrometerPage, HydrometerPageFilter> {

  public get env(): string {
    return `${environment.hydrometer}`
  }

  constructor(http: HttpClient) {
    super(http)
  }

  public createAll(model: CreateHydrometer[]): Observable<Hydrometer[]>{
    return this.http.post<Hydrometer[]>(`${this.env}/all`, model);
  }

}
