import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GoodInStock} from "../../model/good-in-stock";
import {GoodInStockService} from "../../service/good-in-stock.service";

@Component({
  selector: 'app-choose-gis',
  templateUrl: './choose-gis.component.html',
  styleUrls: ['./choose-gis.component.css']
})
export class ChooseGisComponent implements OnInit {
  @Output() gisChange = new EventEmitter();
  goods: GoodInStock[];
  selectedRows: number[];
  selectedGoods: number[];

  constructor(private gisService: GoodInStockService) { }

  ngOnInit() {
    this.getGoods();
  }

  gisChangeEvent(): void{
    this.gisChange.emit(this.selectedGoods);
  }

  getGoods(){
    this.gisService.getGoods().subscribe(goods => this.goods = goods);
  }

  setClickedRow(index, id){
    this.selectedRows.push(index);
    this.selectedGoods.push(id);
  }
}
