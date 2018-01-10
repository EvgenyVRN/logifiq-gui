import { Address } from './address';

export class Contractor {
  id: number;
  name: string;
  text: string;
  fullName: string;
  businessId: string;
  vatid: string;
  addresses: Address[];
  enable: boolean;
  author: number;
}
