import { Address } from "@model/default/address";
import { Reference } from "@model/default/reference";

export interface HydrometerProposal {
  area: string,
  hydrometers: HydrometerProposalImpl[],
  selected: boolean,
  reference: Reference,
  lastReference: Reference,
}

export interface HydrometerProposalItem{
  address: Address,
  selected: boolean,
  alreadyExists: boolean,
  actualCollect: HydrometerProposalCollect,
  lastCollect:  HydrometerProposalCollect,
}


export class HydrometerProposalImpl implements HydrometerProposalItem {
  address: Address;
  selected: boolean;
  alreadyExists: boolean;
  actualCollect: HydrometerProposalCollect;
  lastCollect:  HydrometerProposalCollect;
  waterFreeTier: number = 10000;
  waterPrice: number = 0.004;
  
  constructor(hydrometerProposalItem: HydrometerProposalItem){
    this.address = hydrometerProposalItem.address;
    this.selected = hydrometerProposalItem.selected;
    this.actualCollect = hydrometerProposalItem.actualCollect;
    this.lastCollect =  hydrometerProposalItem.lastCollect;
  }

  get consumption(): number {
    const actual = this.lastCollect.totalMeter ?? 0 
    const last = this.actualCollect.totalMeter ?? 0

    const total = (last - actual ) <= 0 ? 0 : (last - actual)

    return total
  }

  get consideredConsumption(): number{
    if(this.consumption <= this.waterFreeTier){
      return 0  
    } else {
      return this.consumption - this.waterFreeTier
    }
  }

  get value(): number {
    return this.consideredConsumption * this.waterPrice
  }

}



export interface HydrometerProposalCollect{
  reference: Reference,
  totalMeter?: number,
}
