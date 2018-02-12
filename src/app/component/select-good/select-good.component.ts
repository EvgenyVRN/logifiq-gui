import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Good } from '../../model/good';
import { GoodService } from '../../service/good.service';
import {SelectItem} from "primeng/api";

@Component({
  selector: 'app-select-good',
  templateUrl: './select-good.component.html',
  styleUrls: ['./select-good.component.css']
})
export class SelectGoodComponent implements OnInit {
  public goods : Good[] = [];
  @Input() good: Good;
  @Output() goodChange = new EventEmitter();
  @Input() required;
  selectItems: SelectItem[] = [];

  constructor(
    private goodService: GoodService) { }

  ngOnInit() {
    this.getGoods();
    if (this.good == null){
      this.good = new Good();
    }

  }

  getGoods():void {
    this.goodService.getGoods()
       .subscribe(goods => {
         this.goods = goods;
         this.goods.forEach( g => this.fillSelectItem(g));
       });
  }

  onItemSelect(){
    this.goodChange.emit(this.good);
  }

  private fillSelectItem(good: Good){
    this.selectItems.push({label: good.name, value: good});
  }



}
