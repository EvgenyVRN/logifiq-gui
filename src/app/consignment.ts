import { Contractor } from './contractor';

export class Consignment {
  id: number;
  direction: string;
  consignor: Contractor;
  consignee: Contractor;
  deliveryToCompany: Contractor;
  finalDestination: Contractor;
}
