import { Datasets } from "./dataset";
import { Distribution } from "./distribution";

export interface Dashboard {
  totalLink: number,
  totalCustomer: number,
  awaitingPaymentInvoice: number,
  generatedInvoice: number,
  qtdTransactionsToday: number,
  valueTransactionsToday: number,
  awaitingPaymentInvoiceCurrency: number,
  totalPaymentInvoiceCurrency: number,
  groupDistribution: Distribution,
  customerDistribution: Distribution,
  paymentDistribution: Datasets
}
