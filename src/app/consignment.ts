import { Contractor } from './contractor';
import { Document } from './document';
import { GoodInConsignment } from './goodinconsignment';
import { ModeOfTransport } from './modeoftransport';
import { TermsOfDelivery } from './termsofdelivery';

export class Consignment {
  id: number;
  document: Document;
  direction: string;
  consignor: Contractor;
  consignee: Contractor;
  deliveryToCompany: Contractor;
  finalDestination: Contractor;
  goodsHolder: Contractor;
  costPayer: Contractor;
  vehicleRegNum: string;
  vehicleRegCountry: string;
  trailerRegNum: string;
  trailerRegCountry: string;
  modeOfTransport: ModeOfTransport;
  termsOfDelivery: TermsOfDelivery;
  goodsInConsignment: GoodInConsignment[];
  enable: boolean;
  totalPackages: number; // should calculate
  totalWeight: number; // should calculate
  totalVolume: number; // should calculate
}
