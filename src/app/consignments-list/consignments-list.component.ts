import { Consignment } from '../consignment';
import { ConsignmentService } from '../consignment.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consignments-list',
  templateUrl: './consignments-list.component.html',
  styleUrls: ['./consignments-list.component.css']
})
export class ConsignmentsListComponent implements OnInit {

  consignments: Consignment[];

  constructor(
    private consignmentService: ConsignmentService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getConsignments();
  }

  getConsignments(): void {
    this.consignmentService.getConsignments()
      .subscribe(consignments => this.consignments = consignments);
  }
}
