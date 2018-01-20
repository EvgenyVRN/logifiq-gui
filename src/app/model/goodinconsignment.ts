import { Good } from './good';
import { Unit } from './unit';

export class GoodInConsignment {
  id = 0;
  good: Good;
//  document: Document;
  marks = '';
  description = '';
  places: number;
  placeType: Unit;
  grossWeight: number;
  netWeight: number;
  volume: number;
  enable = true;
}
