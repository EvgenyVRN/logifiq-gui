import { Contractor } from './contractor';
import { Document } from './document';
import { GoodInConsignment } from './goodinconsignment';
import { ModeOfTransport } from './modeoftransport';
import { TermsOfDelivery } from './termsofdelivery';
import { Address } from './address';
import { Customs } from './customs';
import {Contract} from "./contract";
import {Order} from "./order";
import {CountryService} from "../service/country.service";
import {Country} from "./country";
import {Good} from "./good";
import {Unit} from "./unit";

export class Consignment {
  id: number;
  document: Document;
  direction = '';
  order: Order;
  consignor: Contractor;
  consignorAddress: Address;
  consignorCustoms: Customs;
  sendingDate: Date;
  otherConsignorAddress: Address;
  consignee: Contractor;
  consigneeAddress: Address;
  deliveryToCompany: Contractor;
  deliveryTo: Address;
  finalDestination: Address;
  finalDestinationCompany: Contractor;
  finalDestinationCustoms: Customs;
  goodsHolder: Contractor;
  costPayer: Contractor;
  costPayerContract: Contract;
  vehicleRegNum = '';
  vehicleRegCountry: Country;
  vehicleModeOfTransport = '';
  trailerRegNum = '';
  trailerRegCountry: Country;
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

  public addNewGood():void{
    this.goodsInConsignment.push(new GoodInConsignment);
  }

  public deleteRow(index):void{
    this.goodsInConsignment.splice(index, 1);
    console.log("row " + index + " deleted");
  }
}
