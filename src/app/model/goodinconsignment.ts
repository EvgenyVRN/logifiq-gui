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
  name: string;
  text: string;
  constructor(name: string, text: string, good: Good, places: number, placeType: Unit, grossWeight: number, netWeight: number,
              volume: number){
    this.name = name;
    this.text = text;
    this.good = good;
    this.places = places;
    this.placeType = placeType;
    this.grossWeight = grossWeight;
    this.netWeight = netWeight;
    this.volume = volume;
  }

}
