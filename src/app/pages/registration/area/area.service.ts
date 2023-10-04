import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Area, AreaFilter, AreaPage, AreaPageFilter } from '@model/default/area';
import { DefaultService } from 'app/@shared/default.service';

@Injectable()
export class AreaService extends DefaultService<Area, AreaFilter, AreaPage, AreaPageFilter> {

  public get env(): string {
    return `${environment.area}`
  }

  constructor(http: HttpClient) {
    super(http)
  }

}
