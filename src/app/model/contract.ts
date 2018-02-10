import {Contractor} from "./contractor";

export class Contract{
  id = 0;
  name: string;
  createDate: string;
  endValidity: string;
  startValidity: string;
  contractor: Contractor;
  enable = true;
  author: number;
  text: string; // need for ng-select
}
