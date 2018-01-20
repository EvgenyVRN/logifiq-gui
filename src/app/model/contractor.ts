import { Address } from './address';

export class Contractor {
  id: number;
  name = '';
  fullName = '';
  businessId = '';
  vatid = '';
  addresses: Address[];
  enable = true;
  author = 0;
  text = ''; // need for ng-select
}
