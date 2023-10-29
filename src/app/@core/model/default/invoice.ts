import { Link } from "./_index";
import { PageFilter } from "./page-filter";
import { Reference } from "./reference";
import { StatusComponent } from "./status";


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
  reference: Reference,
  dueDate: Date,
  emission: string,
  invoiceDetails: InvoiceDetail[],
  linkDetail: LinkDetail,
  totalValue: number,
  totalAwaitingPayment: number,
  totalPaidValue: number,
  isPayed: boolean,
  isOverDue: boolean,
  daysInOverDue: number,
  cancellationOfRisk: boolean,
} 

export class InvoicePageImplementation implements InvoicePage {
  id: string;
  reference: Reference;
  dueDate: Date;
  emission: string;
  invoiceDetails: InvoiceDetail[];
  linkDetail: LinkDetail;
  totalValue: number;
  totalAwaitingPayment: number;
  totalPaidValue: number;
  isPayed: boolean;
  isOverDue: boolean;
  daysInOverDue: number;
  cancellationOfRisk: boolean;

  constructor(data: InvoicePage) {
    this.id = data.id;
    this.reference = data.reference;
    this.dueDate = data.dueDate;
    this.emission = data.emission;
    this.invoiceDetails = data.invoiceDetails;
    this.linkDetail = data.linkDetail;
    this.totalValue = data.totalValue;
    this.totalAwaitingPayment = data.totalAwaitingPayment;
    this.totalPaidValue = data.totalPaidValue;
    this.isPayed = data.isPayed;
    this.isOverDue = data.isOverDue;
    this.daysInOverDue = data.daysInOverDue;
    this.cancellationOfRisk = data.cancellationOfRisk;
  }


  get status(): StatusComponent{
    if(this.isPayed){
      return 'success'
    } else {
      if(this.isOverDue){
        return 'danger'
      } else {
        return 'basic'
      }
    }
  }
}


export interface LinkDetail{
  linkId: string,
  customer: string,
  address: string,
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
    reference?: Reference = null;
    value?: number = null;
    dueDate?: string = null;
    customerName?: string = null;
    addressName?: string = null;

    reset(){
      super.reset();
      this.id = null;
      this.reference = null;
      this.addressName = null,
      this.customerName = null;
      this.value = null;
      this.dueDate = null;
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
  linkId: string,
  customer: string,
  address: string,
}

export interface CreateInvoiceDetail{
  reason: string,
  value: number,
  dataPaid: Date,
}
