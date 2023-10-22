import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { CreateInvoice, CreateInvoiceResponse, Invoice, InvoiceFilter, InvoicePage, InvoicePageFilter } from '@model/default/invoice';
import { DefaultService } from 'app/@shared/default.service';
import { Observable } from 'rxjs';

@Injectable()
export class InvoiceService extends DefaultService<Invoice, InvoiceFilter, InvoicePage, InvoicePageFilter> {

  public get env(): string {
    return `${environment.invoice}`
  }

  constructor(http: HttpClient) {
    super(http)
  }


  public createInvoice(createInvoices: CreateInvoice[]): Observable<CreateInvoiceResponse[]> {
    return this.http.post<CreateInvoiceResponse[]>(`${this.env}`, createInvoices);
  }


}
