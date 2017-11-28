import { Address } from './address';

export class Contractor {
  id: number;
  name: string;
  fullName: string;
  businessId: string;
  VATid: string;
  addresses: Address[];
}
