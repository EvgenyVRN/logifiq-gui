import { Consignment } from '../consignment';
import { ConsignmentService } from '../consignment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consignment',
  templateUrl: './consignment.component.html',
  styleUrls: ['./consignment.component.css']
})
export class ConsignmentComponent implements OnInit {

  consignment: Consignment;

  constructor( private consignmentService: ConsignmentService ) { }

  ngOnInit() {
    this.getConsignment(1);
  }

  getConsignment( id: number ): void {
    this.consignment = this.consignmentService.getConsignment(id);
  }

}
