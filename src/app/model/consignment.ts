import { Contractor } from './contractor';
import { Document } from './document';
import { GoodInConsignment } from './goodinconsignment';
import { ModeOfTransport } from './modeoftransport';
import { TermsOfDelivery } from './termsofdelivery';
import { Address } from './address';
import { Customs } from './customs';

export class Consignment {
  id: number;
  document: Document;
  direction: string;
  consignor: Contractor;
  consignorAddress: Address;
  consignorCustoms: Customs;
  otherConsignorAddress: Address;
  consignee: Contractor;
  consigneeAddress: Address;
  deliveryToCompany: Address;
  finalDestination: Address;
  DestinationCustoms: Customs;
  goodsHolder: Contractor;
  costPayer: Contractor;
  vehicleRegNum: string;
  vehicleRegCountry: string;
  vehicleModeOfTransport: string;
  trailerRegNum: string;
  trailerRegCountry: string;
  trailerModeOfTransport: string;
  deliveryTerms: string;
  deliveryTermsPlaces: number;
  releaseTerms: string;
  releaseTermsPlaces: number;
  goodsInConsignment: GoodInConsignment[] = new Array();
  enable: boolean;

  totalRows: number; // should calculate
  totalPackages: number; // should calculate
  totalGrossWeight: number; // should calculate
  totalNetWeight: number; // should calculate
  totalVolume: number; // should calculate
  
  public addNewGood(){
    this.goodsInConsignment.push(new GoodInConsignment());
  }
  
  public deleteRow(index){
    this.goodsInConsignment.slice(index, 1);
    console.log("row " + index + " deleted");
  }
}
