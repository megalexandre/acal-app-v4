import { Link } from "./_index";
import { PageFilter } from "./page-filter";
import { Reference } from "./reference";


export interface Invoice {
  id?: string,
  reference: Reference,
  link?: Link,
  linkId: string,
  dueDate: string,
  emission: string,
  isPayed: boolean,
  invoiceDetails: InvoiceDetail[],
  status: string,
}

export interface InvoicePage {
  id: string,
  isOverdue: boolean,
  totalValue: number,
  reference: string,
  link?: Link,
  dueDate: string,
  emission: string,
  isPayed: boolean,
  invoiceDetails: InvoiceDetail[],
  status: string,
}


export interface InvoiceDetail {
  id?: string,
  reason: string,
  value: number,
  isPayed: boolean,
  dataPayed: string
}

export interface InvoiceRequest {
  link: linkRequest,
  reference: string,
  invoiceDetails: InvoiceDetail[],
  dueDate: string,
  emission: string,
}

interface linkRequest {
  id: string
}

export interface InvoiceFilter {
  id?: string,
  reference?: string,
  value?: number,
  dueDate?: string,
  customerName: string,

  reset(): void

}

export class InvoicePageFilter extends PageFilter {

    id?: string = null;
    reference?: string = null;
    value?: number = null;
    dueDate?: string = null;
    customerName: string = null;
    address: any = null;

    reset(){
      super.reset();
      this.id = null;
      this.reference = null;
      this.address = null,
      this.value = null;
      this.dueDate = null;
      this.customerName = null;
    }

}





export interface CreateInvoice{
  reference: string,
  emission: Date,
  dueDate: Date,
  linkDetail: CreateLinkDetail,
  invoiceDetails:CreateInvoiceDetail[],
}

export interface CreateInvoiceResponse{
  id: string,
}


export interface CreateLinkDetail{
  linkId: String,
  customer: String
}

export interface CreateInvoiceDetail{
  reason: String,
  value: number,
  dataPaid: Date,
}
