import { Address } from './address';

export class Contractor {
  id = 0;
  name = '';
  fullName = '';
  businessId = '';
  vatid = '';
  addresses: Address[];
  enable = true;
  author = 0;
  text = ''; // need for ng-select
}
