import { Consignment } from '../consignment';
import { ConsignmentService } from '../consignment.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-consignment',
  templateUrl: './consignment.component.html',
  styleUrls: ['./consignment.component.css']
})
export class ConsignmentComponent implements OnInit {

  consignment: Consignment;

  constructor(
    private consignmentService: ConsignmentService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getConsignment();
  }

  getConsignment(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.consignmentService.getConsignment(id)
      .subscribe(consignment => this.consignment = consignment);
  }

}
