import { Consignment } from '../consignment';
import { ConsignmentService } from '../consignment.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-consignment',
  templateUrl: './consignment.component.html',
  styleUrls: ['./consignment.component.css']
})
export class ConsignmentComponent implements OnInit {

  consignment: Observable<Consignment>;

  constructor( private consignmentService: ConsignmentService ) { }

  ngOnInit() {
    this.getConsignment(100000109);
  }

  getConsignment( id: number ): void {
    this.consignment = this.consignmentService.getConsignment(id);
  }

}
