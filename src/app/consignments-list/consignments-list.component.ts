import { Consignment } from '../model/consignment';
import { ConsignmentService } from '../service/consignment.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Contractor} from "../model/contractor";


@Component({
  selector: 'app-consignments-list',
  templateUrl: './consignments-list.component.html',
  styleUrls: ['./consignments-list.component.css']
})
export class ConsignmentsListComponent implements OnInit {

  consignments: Consignment[];
  direction = '';
  consignor: Contractor;
  consignee: Contractor;
  vehicleId: number;
  totalPackages: number;
  totalGrossWeight: number;
  totalVolume: number;

  consId: number;

  constructor(
    private consignmentService: ConsignmentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getConsignments();
  }

  getConsignments(): void {
     this.consignmentService.getConsignments()
       .subscribe(consignments => this.consignments = consignments);
    // this.consignments = [{"id":100000009,"document":{"id":100000109,"name":"CONSIGNMENT","enable":true,"author":1,"confirmed":true,"updateTime":"2017-08-08T10:18:46","confirmDate":null,"createDate":"2017-08-08T10:18:48"},"consignor":{"id":1,"name":"Ivan","enable":true,"author":1,"fullName":"Ivan Drago","businessId":"123","addresses":[{"id":1,"index":"394048","country":{"id":80,"country":"Russian Federation","alpha2":"RU"},"region":"Voronezh","city":"Voronezh","street":"qwerqe","apt":"1s","enable":true,"author":null},{"id":9,"index":"394048","country":{"id":80,"country":"Russian Federation","alpha2":"RU"},"region":"Voronezh","city":"Voronezh","street":"qwerqe","apt":"1s1","enable":true,"author":1}],"vatid":"312"},"consignee":{"id":1,"name":"Ivan","enable":true,"author":1,"fullName":"Ivan Drago","businessId":"123","addresses":[{"id":1,"index":"394048","country":{"id":80,"country":"Russian Federation","alpha2":"RU"},"region":"Voronezh","city":"Voronezh","street":"qwerqe","apt":"1s","enable":true,"author":null},{"id":9,"index":"394048","country":{"id":80,"country":"Russian Federation","alpha2":"RU"},"region":"Voronezh","city":"Voronezh","street":"qwerqe","apt":"1s1","enable":true,"author":1}],"vatid":"312"},"deliveryToCompany":{"id":1,"name":"Ivan","enable":true,"author":1,"fullName":"Ivan Drago","businessId":"123","addresses":[{"id":1,"index":"394048","country":{"id":80,"country":"Russian Federation","alpha2":"RU"},"region":"Voronezh","city":"Voronezh","street":"qwerqe","apt":"1s","enable":true,"author":null},{"id":9,"index":"394048","country":{"id":80,"country":"Russian Federation","alpha2":"RU"},"region":"Voronezh","city":"Voronezh","street":"qwerqe","apt":"1s1","enable":true,"author":1}],"vatid":"312"},"finalDestination":{"id":1,"name":"Ivan","enable":true,"author":1,"fullName":"Ivan Drago","businessId":"123","addresses":[{"id":1,"index":"394048","country":{"id":80,"country":"Russian Federation","alpha2":"RU"},"region":"Voronezh","city":"Voronezh","street":"qwerqe","apt":"1s","enable":true,"author":null},{"id":9,"index":"394048","country":{"id":80,"country":"Russian Federation","alpha2":"RU"},"region":"Voronezh","city":"Voronezh","street":"qwerqe","apt":"1s1","enable":true,"author":1}],"vatid":"312"},"enable":true}];

  }

  open(id:number):void{
    console.log("open with id = " + id);
    this.router.navigate(['/consignment/', id]);

  }

  remove(id:number):void{
    this.consignmentService.deleteConsignment(id);
    this.getConsignments();
  }

  createCMR(id:number):void{

  }

  createTIR(id:number):void{

  }


}
