import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Good } from '../../model/good';
import { GoodService } from '../../service/good.service';

@Component({
  selector: 'app-select-good',
  templateUrl: './select-good.component.html',
  styleUrls: ['./select-good.component.css']
})
export class SelectGoodComponent implements OnInit {
  public goods : Good[];
  @Input() good: Good;
  @Output() goodChange = new EventEmitter();
  public active: Good[] = [];
  private value:any = {};
  public disabled = false;

  constructor(
    private goodService: GoodService) { }

  ngOnInit() {
    this.getGoods();
    if (this.good != null){
      this.good.text = this.good.name;
      this.active.push(this.good);
    }
  }

  getGoods():void {
    this.goodService.getGoods()
       .subscribe(good => this.goodAnswer(good));
  }

  private goodAnswer(goods: Good[]) {
    this.goods = goods;
    this.goods.forEach((good : Good) => {
      good.text = good.name;
    });
  }

  public selected(value:any):void {
    console.log('Selected value is: ', value);
    this.goodChange.emit(value);
  }

  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }

  public typed(value:any):void {
    console.log('New search input: ', value);
  }

  public refreshValue(value:any):void {
    this.value = value;
  }
}
