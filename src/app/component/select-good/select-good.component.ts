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
  @Input() required: boolean;
  selectItems: SelectItem[] = [];
  selectedItem: Good;

  constructor(
    private goodService: GoodService) {
  }

  ngOnInit() {
    this.getGoods();
  }

  getGoods():void {
    this.goodService.getGoods()
       .subscribe(goods => {
         this.goods = goods;
         this.goods.forEach( g => this.fillSelectItem(g));
         this.selectedItem = this.good;
       });
  }

  onItemSelect(){
    this.goodChange.emit(this.selectedItem);
  }

  private fillSelectItem(good: Good){
    this.selectItems.push({label: good.name, value: good});
  }



}
