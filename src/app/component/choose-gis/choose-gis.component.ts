import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GoodInStock} from "../../model/good-in-stock";
import {GoodInStockService} from "../../service/good-in-stock.service";

@Component({
  selector: 'app-choose-gis',
  templateUrl: './choose-gis.component.html',
  styleUrls: ['./choose-gis.component.css']
})
export class ChooseGisComponent implements OnInit {
  @Output() gisChange = new EventEmitter();
  selectedRows: Array<number> = [];
  selectedGoods: Array<GoodInStock> = [];
  @Input() goods: Array<GoodInStock>;

  constructor(private gisService: GoodInStockService) { }

  ngOnInit() {
    this.getGoods();
  }

  getGoods(){
    this.gisService.getGoods().subscribe(goods => this.goods = goods);
  }

  setClickedRow(index, good){
    this.selectedRows.push(index);
    this.selectedGoods.push(good);
    this.gisChange.emit(this.selectedGoods);
  }
}
