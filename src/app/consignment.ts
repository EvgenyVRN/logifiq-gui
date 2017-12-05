import { Contractor } from './contractor';
import { Document } from './document';

export class Consignment {
  id: number;
  document: Document;
//  direction: string;
  consignor: Contractor;
  consignee: Contractor;
  deliveryToCompany: Contractor;
  finalDestination: Contractor;
  enable: boolean;
}
