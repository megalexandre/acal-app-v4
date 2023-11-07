import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reference } from '@model/default/reference';
import { NbToastrService } from '@nebular/theme';
import { ProposalService } from 'app/pages/financial/invoice/proposal.service';
import { map } from 'rxjs/operators';
import { CreateHydrometer } from '../hydrometer.model/hydrometer';
import { HydrometerProposal, HydrometerProposalImpl } from '../hydrometer.model/hydrometer-proposal';
import { HydrometerService } from '../hydrometer.service';

@Component({
  templateUrl: './hydrometer-create.component.html',
  styleUrls: ['./hydrometer-create.component.scss']
})
export class HydrometerCreateComponent {
  public title: String = "Registrar Coletas";
  public form: FormGroup;
  public submmited: boolean = false;
  public loaded: boolean = false;
  
  public hydrometerProposals: HydrometerProposal[] = null;

  public actualReference: Reference;
  public lastReference: Reference;

  constructor(
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public service: HydrometerService,
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


  public confirm(){
    const allHydrometers = this.hydrometerProposals.map(hp => hp.hydrometers)
    const allSelectedHydrometers = Array.prototype.concat.apply([], allHydrometers) as HydrometerProposalImpl[]
    const all = allSelectedHydrometers.filter(item => item.selected)

    const request: CreateHydrometer[] = all.map(i => ({
      address: i.address,
      actualCollect: { reference: i.actualCollect.reference, totalMeter: i.actualCollect.totalMeter ?? 0},
      lastCollect: { reference: i.lastCollect.reference, totalMeter: i.lastCollect.totalMeter ?? 0} 
    }))

    this.service.createAll(request).subscribe(
      ()=> {
        this.hydrometerProposals = null;
        this.submit()
      }
    )
  }


  selectItem(item: HydrometerProposalImpl){
    if(item.actualCollect.totalMeter !== null && item.actualCollect.totalMeter !== 0){
      item.selected = true
    }
  }

  public submit(){
    this.submmited = true;

    if(this.form.invalid){
      return
    }

    this.proposalService.listHydrometerProposal(this.form.value).pipe(
      map(((hydrometerProposals: HydrometerProposal[]) => {
        
        return hydrometerProposals.map((proposal) => {
          proposal.hydrometers = proposal.hydrometers.map((item) => new HydrometerProposalImpl(item))
          proposal.hydrometers.forEach(hydromter => {

            hydromter.alreadyExists = hydromter.actualCollect.totalMeter !== null

            if(hydromter.lastCollect.totalMeter === null){
              hydromter.lastCollect.totalMeter = 0
            }})

          return proposal
        })
      
      })
    )).subscribe(
      (hydrometerProposals: HydrometerProposal[]) => {
        this.hydrometerProposals = hydrometerProposals
        this.actualReference = hydrometerProposals[0].reference;
        this.lastReference = hydrometerProposals[0].lastReference;

        this.hydrometerProposals?.forEach(it => {
          it.selected = false
          it.hydrometers.forEach(it => {
            it.selected = false;
          })
        })
        this.loaded = true
      },
      (response) =>{
        this.toastrService.danger(`Não foi possivel realizar a ação`, response.error.cause,)
      }
    )
  }

  public back(){
    this.router.navigate(['../list'],{relativeTo: this.activatedRoute})
  }


  get reference(): AbstractControl {
    return this.form.get('reference')
  }
}
