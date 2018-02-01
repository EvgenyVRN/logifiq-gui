import { Contractor } from './contractor';
import { Document } from './document';
import { GoodInConsignment } from './goodinconsignment';
import { ModeOfTransport } from './modeoftransport';
import { TermsOfDelivery } from './termsofdelivery';
import { Address } from './address';
import { Customs } from './customs';
import {Contract} from "./contract";
import {Order} from "./order";

export class Consignment {
  id: number;
  document: Document;
  direction = '';
  order: Order;
  consignor: Contractor;
  consignorAddress: Address;
  consignorCustoms: Customs;
  sendingDate: string;
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

  totalRows: number; // should calculate
  totalPackages: number; // should calculate
  totalGrossWeight: number; // should calculate
  totalNetWeight: number; // should calculate
  totalVolume: number; // should calculate

  public addNewGood(){
    this.goodsInConsignment.push(new GoodInConsignment());
  }

  public deleteRow(index){
    this.goodsInConsignment.splice(index, 1);
    console.log("row " + index + " deleted");
  }
}
