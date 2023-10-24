import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Link, LinkFilter, LinkPage, LinkPageFilter } from 'app/pages/registration/link/link.model/link';
import { DefaultService } from 'app/@shared/default.service';

@Injectable()
export class LinkService extends DefaultService<Link, LinkFilter, LinkPage, LinkPageFilter> {

  public get env(): string {
    return `${environment.link}`
  }

  constructor(http: HttpClient) {
    super(http)
  }

}
