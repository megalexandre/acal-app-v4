
export interface CreateProposalRequest {
  reference: string,
}

export interface Proposal{
  area: string,
  invoices: InvoiceProposal[],
  selected: boolean,
}

export interface InvoiceProposal {
  reference: string,
  emission: Date,
  linkDetail: LinkDetail,
  invoiceDetails:  InvoiceDetail[],
  total: number,
  addressName: string,
  selected: boolean,
}

export interface InvoiceDetail {
  reason: string,
  value: number,
  dataPaid: Date,
}

export interface LinkDetail{
  linkId: string,
  customer: string,
  address: string,
}
