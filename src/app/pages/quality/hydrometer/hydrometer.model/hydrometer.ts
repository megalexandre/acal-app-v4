import { Address } from "@model/default/address";
import { Area } from "@model/default/area";
import { PageFilter } from "@model/default/page-filter";
import { Reference } from "@model/default/reference";

export interface Hydrometer {
  id: string,
  addressId: string,
  value: number,
  waterPrice: number,
  waterFreeTier: number,
  reference: Reference,
  consumption: number,
  consideredConsumption: number,
}

export interface CreateHydrometer {
  address: Address,
  actualCollect: HydrometerCollectRequest,
  lastCollect: HydrometerCollectRequest,
}

export interface HydrometerCollectRequest{
  reference: Reference,
  totalMeter: number,
}

export interface HydrometerFilter {
  id: string,
  addressId: string,
  reference: Reference,
}

export interface HydrometerPage {
  id: string,
  addressId: string,
  actualCollect: HydrometerCollect, 
  lastCollect: HydrometerCollect,
  reference: Reference,
  consumption: number,
  consideredConsumption: number,
  value: number,
}

export interface HydrometerCollect{
  reference: Reference,
  totalMeter: number,
}


export class HydrometerPageFilter extends PageFilter {
  id?: string = null;
  area?: Area = null;
  addressId: string = null;
  reference: Reference = null;

  reset(){
    super.reset();
    this.id = null;
    this.addressId = null;
    this.reference = null;
  }

}


