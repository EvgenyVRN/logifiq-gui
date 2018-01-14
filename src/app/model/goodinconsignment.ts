import { Good } from './good';
import { Unit } from './unit';

export class GoodInConsignment {
  id:number;
  good: Good;
//  document: Document;
  marks: string;
  description: string;
  places: number;
  placeType: Unit;
  grossWeight: number;
  netWeight: number;
  volume: number;
  enable: boolean;
}
