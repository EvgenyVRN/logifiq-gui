import { Country } from './country';

export class Address {
  id = 0;
  index = '';
  country = new Country();
  region = '';
  city = '';
  street = '';
  apt = '';
  enable = true;
  author = 0;

  text: string; // need for ng-select
}
