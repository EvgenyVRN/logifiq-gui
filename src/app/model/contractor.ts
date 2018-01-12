import { Address } from './address';

export class Contractor {
  id: number;
  name: string;
  fullName: string;
  businessId: string;
  vatid: string;
  addresses: Address[];
  enable: boolean;
  author: number;
  text: string; // need for ng-select
}
