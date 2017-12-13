import { Good } from '../good';

export class GoodInConsignment {
  id:number;
  good: Good;
//  document: Document;
  marks: string;
  description: string;
  places: number;
  placeType: string;
  grossWeight: number;
  netWeight: number;
  volume: number;
  enable: boolean;
}
