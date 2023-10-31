import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateInvoice } from '@model/default/invoice';
import { InvoiceProposal, Proposal } from '@model/default/proposal';
import { NbToastrService } from '@nebular/theme';
import { InvoiceService } from '../invoice.service';
import { ProposalService } from '../proposal.service';

@Component({
  templateUrl: './invoice-create.component.html',
})
export class InvoiceCreateComponent implements OnInit {

  public title: String = "Gerar Faturas";
  public form: FormGroup;
  public submmited: boolean = false;
  public proposals: Proposal[] = null;
  public dueDate: Date = null;

  constructor(
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public service: InvoiceService,
    public proposalService: ProposalService,
    public toastrService: NbToastrService,
    ) {
      this.createForm()
  }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      reference: [null, Validators.required],
    })
  }

  public submit(){
    this.submmited = true;

    if(this.form.invalid){
      return
    }

    this.proposalService.listProposal(this.form.value).subscribe(
      (proposals: Proposal[]) => {
        this.proposals = proposals
        this.proposals?.forEach(it => {
          it.selected = false
          it.invoices.forEach(it => {
            it.selected = false;
          })
        })
      },
      (response) =>{
        this.toastrService.danger(`Não foi possivel realizar a ação`, response.error.cause,)
      }
    )
  }

  public totalValueByProposal(proposal: Proposal){
    return proposal.invoices.filter(i => i.selected).map(i => i.total).reduce((total, it) => total + it, 0);
  }
  
  public totalValueSelected(): number {

    const a = this.proposals.map(p => p.invoices)
    const b = Array.prototype.concat.apply([], a) as InvoiceProposal[]
    const c = b.filter(i => i.selected)
    const d = c.map(i => i.total)
    const e = d.reduce((total, it) => total + it, 0)

    return e;
  }

  public confirm(){
    const allInvoices = this.proposals.map(p => p.invoices)
    const allInvocesAsLIst = Array.prototype.concat.apply([], allInvoices) as InvoiceProposal[]
    const allValidInvoices = allInvocesAsLIst.filter(it => it.selected)
    const createInvoice = this.convertInvoiceProposalListToInvoiceList(allValidInvoices)
    this.service.createInvoice(createInvoice).subscribe(
      ()=> {
        this.submit()
      },
    )
  }

  public convertInvoiceProposalListToInvoiceList(invoiceProposals: InvoiceProposal[]): CreateInvoice[] {
    return invoiceProposals.map((invoiceProposal) => ({
      number: invoiceProposal.number,
      reference: invoiceProposal.reference,
      emission: invoiceProposal.emission,
      dueDate: this.dueDate,
      linkDetail: invoiceProposal.linkDetail,
      invoiceDetails: invoiceProposal.invoiceDetails,
    }));
  }

  public toggleProposal(proposal: Proposal){
    proposal.selected = !proposal.selected
    proposal.invoices.forEach(invoice => invoice.selected = proposal.selected)
  }

  public toggleInvoice(invoiceProposal: InvoiceProposal, proposal: Proposal){
    invoiceProposal.selected = !invoiceProposal.selected
    proposal.selected = proposal.invoices.filter( i=> !i.selected).length === 0
  } 

  public back(){
    this.router.navigate(['../list'],{relativeTo: this.activatedRoute})
  }

  get reference(): AbstractControl {
    return this.form.get('reference')
  }
}
