import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { CreateProposalRequest, Proposal } from '@model/default/proposal';
import { HydrometerProposal } from 'app/pages/quality/hydrometer/hydrometer.model/hydrometer-proposal';
import { Observable } from 'rxjs';

@Injectable()
export class ProposalService {

  public get env(): string {
    return `${environment.proposal}`
  }

  constructor(public http: HttpClient) {
  }

  public listProposal(createProposalRequest: CreateProposalRequest): Observable<Proposal[]>{
    return this.http.post<Proposal[]>(`${this.env}`, createProposalRequest);
  }

  public listHydrometerProposal(createProposalRequest: CreateProposalRequest): Observable<HydrometerProposal[]>{
    return this.http.post<HydrometerProposal[]>(`${this.env}/hydrometer`, createProposalRequest);
  }

}
