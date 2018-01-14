import { Component, OnInit } from '@angular/core';
import { Good } from '../../model/good';
import { GoodService } from '../../service/good.service';

@Component({
  selector: 'app-select-good',
  templateUrl: './select-good.component.html',
  styleUrls: ['./select-good.component.css']
})
export class SelectGoodComponent implements OnInit {
  public goods : Good[];
  private value:any = {};
  public disabled = false;

  constructor(
    private goodService: GoodService) { }

  ngOnInit() {
    this.getGoods();
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
    const g = this.goods.find(good => good.id === value.id);
    console.log('Good: ', g);
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
