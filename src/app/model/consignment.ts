import { Contractor } from './contractor';
import { Document } from './document';
import { GoodInConsignment } from './goodinconsignment';
import { ModeOfTransport } from './modeoftransport';
import { TermsOfDelivery } from './termsofdelivery';
import { Address } from './address';
import { Customs } from './customs';
import {Contract} from "./contract";

export class Consignment {
  id: number;
  document: Document;
  direction = '';
  consignor: Contractor;
  consignorAddress: Address;
  consignorCustoms: Customs;
  otherConsignorAddress: Address;
  consignee: Contractor;
  consigneeAddress: Address;
  deliveryToCompany: Address;
  finalDestination: Address;
  finalDestinationCustoms: Customs;
  goodsHolder: Contractor;
  costPayer: Contractor;
  costPayerContract: Contract;
  vehicleRegNum = '';
  vehicleRegCountry = '';
  vehicleModeOfTransport = '';
  trailerRegNum = '';
  trailerRegCountry = '';
  trailerModeOfTransport = '';
  deliveryTerms = '';
  deliveryTermsPlaces: number;
  releaseTerms = '';
  releaseTermsPlaces: number;
  goodsInConsignment: GoodInConsignment[] = [];
  enable: boolean;

  totalRows = 0; // should calculate
  totalPackages = 0; // should calculate
  totalGrossWeight = 0; // should calculate
  totalNetWeight = 0; // should calculate
  totalVolume = 0; // should calculate

  public addNewGood(){
    this.goodsInConsignment.push(new GoodInConsignment());
  }

  public deleteRow(index){
    this.goodsInConsignment.splice(index, 1);
    console.log("row " + index + " deleted");
  }
}
