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
  consignor: Contractor = new Contractor();
  consignorAddress: Address = new Address();
  consignorCustoms: Customs = new Customs();
  sendingDate: string;
  otherConsignorAddress: Address = new Address();
  consignee: Contractor = new Contractor();
  consigneeAddress: Address = new Address();
  deliveryToCompany: Address = new Address();
  finalDestination: Address = new Address();
  finalDestinationCustoms: Customs = new Customs();
  goodsHolder: Contractor = new Contractor();
  costPayer: Contractor = new Contractor();
  costPayerContract: Contract = new Contract();
  vehicleRegNum = '';
  vehicleRegCountry: Country = new Country();
  vehicleModeOfTransport = '';
  trailerRegNum = '';
  trailerRegCountry: Country = new Country();
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
    this.goodsInConsignment.push(new GoodInConsignment('', '', new Good, 0, new Unit, 0 , 0, 0));
  }

  public deleteRow(index):void{
    this.goodsInConsignment.splice(index, 1);
    console.log("row " + index + " deleted");
  }
}
