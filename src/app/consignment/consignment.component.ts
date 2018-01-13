import { Consignment } from '../model/consignment';
import { ConsignmentService } from '../service/consignment.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-consignment',
  templateUrl: './consignment.component.html',
  styleUrls: ['./consignment.component.css']
})

export class ConsignmentComponent implements OnInit {

  consignment = new Consignment();

  public statuses:Array<string>=['First', 'Second'];
  constructor(
    private consignmentService: ConsignmentService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
      this.getConsignment();
  }

  getConsignment(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if(id === 0) {
      return;
    }

    this.consignmentService.getConsignment(id)
      .subscribe(consignment => this.consignment = consignment);
   // this.consignment = {"id":100000009,"document":{"id":100000109,"name":"CONSIGNMENT","enable":true,"author":1,"confirmed":true,"updateTime":"2017-08-08T10:18:46","confirmDate":null,"createDate":"2017-08-08T10:18:48"},"consignor":{"id":1,"name":"Ivan","enable":true,"author":1,"fullName":"Ivan Drago","businessId":"123","addresses":[{"id":1,"index":"394048","country":{"id":80,"country":"Russian Federation","alpha2":"RU"},"region":"Voronezh","city":"Voronezh","street":"qwerqe","apt":"1s","enable":true,"author":null},{"id":9,"index":"394048","country":{"id":80,"country":"Russian Federation","alpha2":"RU"},"region":"Voronezh","city":"Voronezh","street":"qwerqe","apt":"1s1","enable":true,"author":1}],"vatid":"312"},"consignee":{"id":1,"name":"Ivan","enable":true,"author":1,"fullName":"Ivan Drago","businessId":"123","addresses":[{"id":1,"index":"394048","country":{"id":80,"country":"Russian Federation","alpha2":"RU"},"region":"Voronezh","city":"Voronezh","street":"qwerqe","apt":"1s","enable":true,"author":null},{"id":9,"index":"394048","country":{"id":80,"country":"Russian Federation","alpha2":"RU"},"region":"Voronezh","city":"Voronezh","street":"qwerqe","apt":"1s1","enable":true,"author":1}],"vatid":"312"},"deliveryToCompany":{"id":1,"name":"Ivan","enable":true,"author":1,"fullName":"Ivan Drago","businessId":"123","addresses":[{"id":1,"index":"394048","country":{"id":80,"country":"Russian Federation","alpha2":"RU"},"region":"Voronezh","city":"Voronezh","street":"qwerqe","apt":"1s","enable":true,"author":null},{"id":9,"index":"394048","country":{"id":80,"country":"Russian Federation","alpha2":"RU"},"region":"Voronezh","city":"Voronezh","street":"qwerqe","apt":"1s1","enable":true,"author":1}],"vatid":"312"},"finalDestination":{"id":1,"name":"Ivan","enable":true,"author":1,"fullName":"Ivan Drago","businessId":"123","addresses":[{"id":1,"index":"394048","country":{"id":80,"country":"Russian Federation","alpha2":"RU"},"region":"Voronezh","city":"Voronezh","street":"qwerqe","apt":"1s","enable":true,"author":null},{"id":9,"index":"394048","country":{"id":80,"country":"Russian Federation","alpha2":"RU"},"region":"Voronezh","city":"Voronezh","street":"qwerqe","apt":"1s1","enable":true,"author":1}],"vatid":"312"},"direction":"IMP","goodsHolder":{"id":2,"name":"Petr","enable":true,"author":2,"fullName":"Petr Petrov","businessId":"7777","addresses":[{"id":1,"index":"394048","country":{"id":80,"country":"Russian Federation","alpha2":"RU"},"region":"Voronezh","city":"Voronezh","street":"qwerqe","apt":"1s","enable":true,"author":null},{"id":3,"index":"3563","country":{"id":80,"country":"Russian Federation","alpha2":"RU"},"region":"etryet","city":"etyey","street":"etyet","apt":"et5","enable":true,"author":null}],"vatid":"8888"},"costPayer":{"id":1,"name":"Ivan","enable":true,"author":1,"fullName":"Ivan Drago","businessId":"123","addresses":[{"id":1,"index":"394048","country":{"id":80,"country":"Russian Federation","alpha2":"RU"},"region":"Voronezh","city":"Voronezh","street":"qwerqe","apt":"1s","enable":true,"author":null},{"id":9,"index":"394048","country":{"id":80,"country":"Russian Federation","alpha2":"RU"},"region":"Voronezh","city":"Voronezh","street":"qwerqe","apt":"1s1","enable":true,"author":1}],"vatid":"312"},"vehicleRegNum":"777","vehicleRegCountry":"36","trailerRegNum":"666","trailerRegCountry":"77","modeOfTransport":{"id":2,"name":"Railway"},"termsOfDelivery":{"id":2,"name":"CIF","description":"Cost, insurance and freight"},"goodsInConsignment":[{"id":1,"good":{"id":1,"name":"notebook","enable":true,"author":null,"description":null},"document":{"id":100000109,"name":"CONSIGNMENT","enable":true,"author":1,"confirmed":true,"updateTime":"2017-08-08T10:18:46","confirmDate":null,"createDate":"2017-08-08T10:18:48"},"marks":"mark1","description":"desc1","places":22,"placeType":"CT","grossWeight":76.0,"netWeight":65.0,"volume":88.0,"enable":true},{"id":2,"good":{"id":2,"name":"table","enable":true,"author":null,"description":null},"document":{"id":100000109,"name":"CONSIGNMENT","enable":true,"author":1,"confirmed":true,"updateTime":"2017-08-08T10:18:46","confirmDate":null,"createDate":"2017-08-08T10:18:48"},"marks":"mark2","description":"desc2","places":13,"placeType":"CT","grossWeight":55.0,"netWeight":67.0,"volume":65.0,"enable":true}],"enable":true};
  }

  public submit(value: any): void {
    console.log('submit consignment: ', this.consignment);
  }
}
