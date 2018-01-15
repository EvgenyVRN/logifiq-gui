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
  direction = '';
  consignor: Contractor = new Contractor();
  consignorAddress: Address = new Address;
  consignorCustoms: Customs = new Customs;
  otherConsignorAddress: Address = new Address;
  consignee: Contractor = new Contractor;
  consigneeAddress: Address = new Address;
  deliveryToCompany: Address = new Address;
  finalDestination: Address = new Address;
  finalDestinationCustoms: Customs = new Customs;
  goodsHolder: Contractor = new Contractor;
  costPayer: Contractor = new Contractor;
  vehicleRegNum = '';
  vehicleRegCountry = '';
  vehicleModeOfTransport = '';
  trailerRegNum = '';
  trailerRegCountry = '';
  trailerModeOfTransport = '';
  deliveryTerms= '';
  deliveryTermsPlaces = 0;
  releaseTerms = '';
  releaseTermsPlaces = 0;
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
