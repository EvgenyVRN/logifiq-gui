import { Consignment } from './consignment';
import { Injectable } from '@angular/core';

@Injectable()
export class ConsignmentService {

  consignment: Consignment = {
    id: 100000109,
    direction: 'import',
    name: 'test consignment'
  };

  constructor() { }

  getConsignment( id: number ): Consignment {
    return this.consignment;
  }
}
