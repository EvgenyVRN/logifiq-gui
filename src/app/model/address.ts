import { Country } from './country';

export class Address {
  id: number;
  index: string;
  country: Country;
  region: string;
  city: string;
  street: string;
  apt: string;
  enable: boolean;
  author: number;

  text: string; // need for ng-select
}
