import { Consignment } from '../model/consignment';
import { ConsignmentService } from '../service/consignment.service';
import {
  AfterViewInit, Component, DoCheck, KeyValueDiffers, OnChanges, OnInit, SimpleChange,
  SimpleChanges
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {GoodInStock} from "../model/good-in-stock";
import {GoodInConsignment} from "../model/goodinconsignment";
import {Order} from "../model/order";
import {MatDialog} from "@angular/material";
import {OrderModalComponent} from "../component/order-modal/order-modal.component";
import {GisModalComponent} from "../component/gis-modal/gis-modal.component";
import {Country} from "../model/country";
import {Address} from "../model/address";
import {ContractorService} from "../service/contractor.service";
import {Contractor} from "../model/contractor";
import {FormGroup} from "@angular/forms";
import {Contract} from "../model/contract";
import {ContractService} from "../service/contract.service";
import {MenuItem, SelectItem} from "primeng/api";
import {GoodInStockService} from "../service/good-in-stock.service";

@Component({
  selector: 'app-consignment',
  templateUrl: './consignment.component.html',
  styleUrls: ['./consignment.component.css']
})

export class ConsignmentComponent implements AfterViewInit, DoCheck{

  consignment: Consignment = new Consignment();
  gis: GoodInStock[];
  dld = false;
  order: Order;
  chosenGoods: GoodInStock[] = [];
  allGis: GoodInStock[] = [];
  differ: any;

  constructor(
    private consignmentService: ConsignmentService,
    private gisService: GoodInStockService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    differs: KeyValueDiffers
  ) {
    this.differ = differs.find([]).create();
  }

  ngAfterViewInit(){
    this.getConsignment();
  }


  cmr():void{

  }

  tirCarnet():void{
    window.location.href = '/tir';
  }

  ngDoCheck(){
    let changes = this.differ.diff(this.consignment);
    if (changes){
      changes.forEachChangedItem((item) => {
        if (item.key === 'consignee'){
          this.consignment.consigneeAddress = null;
        }
        if (item.key === 'consignor'){
          this.consignment.consignorAddress = null;
        }
        if (item.key === 'deliveryToCompany'){
          this.consignment.deliveryTo = null;
        }
        if (item.key === 'finalDestinationCompany'){
          this.consignment.finalDestination = null;
        }
        if (item.key === 'costPayer'){
          this.consignment.costPayerContract = null;
        }
      });
    }
  }

  getConsignment(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if(id === 0 || id == null) {

      return;
    }

    this.consignmentService.getConsignment(id)
      .subscribe(consignment => {
        this.consignment = consignment;
        this.consignment.sendingDate = new Date(+this.consignment.sendingDate);
        console.log(this.consignment);
      });


   // this.consignment = {"id":100000009,"document":{"id":100000109,"name":"CONSIGNMENT","enable":true,"author":1,"confirmed":true,"updateTime":"2017-08-08T10:18:46","confirmDate":null,"createDate":"2017-08-08T10:18:48"},"consignor":{"id":1,"name":"Ivan","enable":true,"author":1,"fullName":"Ivan Drago","businessId":"123","addresses":[{"id":1,"index":"394048","country":{"id":80,"country":"Russian Federation","alpha2":"RU"},"region":"Voronezh","city":"Voronezh","street":"qwerqe","apt":"1s","enable":true,"author":null},{"id":9,"index":"394048","country":{"id":80,"country":"Russian Federation","alpha2":"RU"},"region":"Voronezh","city":"Voronezh","street":"qwerqe","apt":"1s1","enable":true,"author":1}],"vatid":"312"},"consignee":{"id":1,"name":"Ivan","enable":true,"author":1,"fullName":"Ivan Drago","businessId":"123","addresses":[{"id":1,"index":"394048","country":{"id":80,"country":"Russian Federation","alpha2":"RU"},"region":"Voronezh","city":"Voronezh","street":"qwerqe","apt":"1s","enable":true,"author":null},{"id":9,"index":"394048","country":{"id":80,"country":"Russian Federation","alpha2":"RU"},"region":"Voronezh","city":"Voronezh","street":"qwerqe","apt":"1s1","enable":true,"author":1}],"vatid":"312"},"deliveryToCompany":{"id":1,"name":"Ivan","enable":true,"author":1,"fullName":"Ivan Drago","businessId":"123","addresses":[{"id":1,"index":"394048","country":{"id":80,"country":"Russian Federation","alpha2":"RU"},"region":"Voronezh","city":"Voronezh","street":"qwerqe","apt":"1s","enable":true,"author":null},{"id":9,"index":"394048","country":{"id":80,"country":"Russian Federation","alpha2":"RU"},"region":"Voronezh","city":"Voronezh","street":"qwerqe","apt":"1s1","enable":true,"author":1}],"vatid":"312"},"finalDestination":{"id":1,"name":"Ivan","enable":true,"author":1,"fullName":"Ivan Drago","businessId":"123","addresses":[{"id":1,"index":"394048","country":{"id":80,"country":"Russian Federation","alpha2":"RU"},"region":"Voronezh","city":"Voronezh","street":"qwerqe","apt":"1s","enable":true,"author":null},{"id":9,"index":"394048","country":{"id":80,"country":"Russian Federation","alpha2":"RU"},"region":"Voronezh","city":"Voronezh","street":"qwerqe","apt":"1s1","enable":true,"author":1}],"vatid":"312"},"direction":"IMP","goodsHolder":{"id":2,"name":"Petr","enable":true,"author":2,"fullName":"Petr Petrov","businessId":"7777","addresses":[{"id":1,"index":"394048","country":{"id":80,"country":"Russian Federation","alpha2":"RU"},"region":"Voronezh","city":"Voronezh","street":"qwerqe","apt":"1s","enable":true,"author":null},{"id":3,"index":"3563","country":{"id":80,"country":"Russian Federation","alpha2":"RU"},"region":"etryet","city":"etyey","street":"etyet","apt":"et5","enable":true,"author":null}],"vatid":"8888"},"costPayer":{"id":1,"name":"Ivan","enable":true,"author":1,"fullName":"Ivan Drago","businessId":"123","addresses":[{"id":1,"index":"394048","country":{"id":80,"country":"Russian Federation","alpha2":"RU"},"region":"Voronezh","city":"Voronezh","street":"qwerqe","apt":"1s","enable":true,"author":null},{"id":9,"index":"394048","country":{"id":80,"country":"Russian Federation","alpha2":"RU"},"region":"Voronezh","city":"Voronezh","street":"qwerqe","apt":"1s1","enable":true,"author":1}],"vatid":"312"},"vehicleRegNum":"777","vehicleRegCountry":"36","trailerRegNum":"666","trailerRegCountry":"77","modeOfTransport":{"id":2,"name":"Railway"},"termsOfDelivery":{"id":2,"name":"CIF","description":"Cost, insurance and freight"},"goodsInConsignment":[{"id":1,"good":{"id":1,"name":"notebook","enable":true,"author":null,"description":null},"document":{"id":100000109,"name":"CONSIGNMENT","enable":true,"author":1,"confirmed":true,"updateTime":"2017-08-08T10:18:46","confirmDate":null,"createDate":"2017-08-08T10:18:48"},"marks":"mark1","description":"desc1","places":22,"placeType":"CT","grossWeight":76.0,"netWeight":65.0,"volume":88.0,"enable":true},{"id":2,"good":{"id":2,"name":"table","enable":true,"author":null,"description":null},"document":{"id":100000109,"name":"CONSIGNMENT","enable":true,"author":1,"confirmed":true,"updateTime":"2017-08-08T10:18:46","confirmDate":null,"createDate":"2017-08-08T10:18:48"},"marks":"mark2","description":"desc2","places":13,"placeType":"CT","grossWeight":55.0,"netWeight":67.0,"volume":65.0,"enable":true}],"enable":true};
  }

  public submit(value: any): void {
    if (this.consignment.id == null){
      this.consignmentService.createConsignment(this.consignment).subscribe(c => this.consignment = c);
    } else {
      this.consignmentService.updateConsignment(this.consignment).subscribe(c => this.consignment = c);
    }

    console.log('submit consignment: ', this.consignment);
    window.location.href = '/consignments';
  }

  public addRow(event){
    this.consignment.addNewGood();
    this.consignment.totalRows = this.consignment.goodsInConsignment.length === 0 ? null : this.consignment.goodsInConsignment.length;
}

  public deleteRow(index){
    this.consignment.deleteRow(index);
    this.consignment.totalRows = this.consignment.goodsInConsignment.length === 0 ? null : this.consignment.goodsInConsignment.length;
  }

  public calculateTotalPlaces():void{
    this.consignment.totalPackages = 0;
    this.consignment.goodsInConsignment.forEach(g => this.consignment.totalPackages =  +this.consignment.totalPackages + +g.places);
  }

  public calculateTotalGrossWeight():void{
    this.consignment.totalGrossWeight = 0;
    this.consignment.goodsInConsignment.forEach(g => this.consignment.totalGrossWeight =  +this.consignment.totalGrossWeight + +g.grossWeight);
  }

  public calculateTotalNetWeight():void{
    this.consignment.totalNetWeight = 0;
    this.consignment.goodsInConsignment.forEach(g => this.consignment.totalNetWeight =  +this.consignment.totalNetWeight + +g.netWeight);
  }

  public calculateTotalVolume():void{
    this.consignment.totalVolume = 0;
    this.consignment.goodsInConsignment.forEach(g => this.consignment.totalVolume =  +this.consignment.totalVolume + +g.volume);
  }

  showOrderModal(){
    let dialogRef = this.dialog.open(OrderModalComponent, {
      width: '750px',
      height: '500px',
      data: { order: this.order }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.order = result;
      this.consignment.goodsHolder = this.order.owner;
      this.consignment.costPayer = this.order.payer;
      this.consignment.costPayerContract = this.order.contract;
      this.consignment.consignor = this.order.deliverTo;
      this.consignment.consignee = this.order.receiver;
      this.consignment.consignorAddress = this.order.deliveryAddress;
      this.consignment.consigneeAddress = this.order.receiverAddress;
      this.consignment.vehicleRegNum = this.order.vehicleId;
      this.consignment.trailerRegNum = this.order.trailerId;
      this.gisService.getByOrder(this.order.id).subscribe(goods => {
        this.allGis = goods;
      });
    });
  }

  showGisModal(){
    let dialogRef = this.dialog.open(GisModalComponent, {
      width: '750px',
      height: '500px',
      data: { goods: this.allGis, chosenGoods: this.chosenGoods }
    });

    dialogRef.afterClosed().subscribe(result => {
      result.forEach(good =>{
        let g = new GoodInConsignment;
        g.good = good.good;
        g.places = good.placeCount;
        g.placeType = good.placeUnit;
        g.grossWeight = good.weight;
        g.netWeight = good.freightWeight;
        g.volume = good.volume;
        this.consignment.goodsInConsignment.push(g);
    });
  });
  }

  reset():void{
    this.consignment = new Consignment;
  }

}
