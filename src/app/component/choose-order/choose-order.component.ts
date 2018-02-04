import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Order} from "../../model/order";
import {OrderService} from "../../service/order.service";
import {GoodInStock} from "../../model/good-in-stock";

@Component({
  selector: 'app-choose-order',
  templateUrl: './choose-order.component.html',
  styleUrls: ['./choose-order.component.css']
})
export class ChooseOrderComponent implements OnInit {
  @Output() orderChange = new EventEmitter();
  orders: Order[] = [];
  selectedRow: number;
  selectedOrder: Order;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.getOrders();
    // this.getMockOrders();
  }

  getOrders(){
    this.orderService.getOrders().subscribe(orders => this.orders = orders);
  }

  getMockOrders(){
    const o1 = new Order();
    o1.id = 1000001;
    const g1 = new GoodInStock();
    g1.id = 1;
    g1.name = 'g1';
    g1.text = 'g1';
    g1.volume = 100;
    g1.freightWeight = 150;
    g1.placeCount = 200;
    g1.weight = 250;
    const g2 = new GoodInStock();
    g2.id = 2;
    g2.name = 'g2';
    g2.text = 'g2';
    const g3 = new GoodInStock();
    g3.id = 3;
    g3.name = 'g3';
    g3.text = 'g3';
    o1.goodsInStock.push(g1,g2,g3);
    const o2 = new Order();
    o2.id = 1000002;
    const g4 = new GoodInStock();
    g4.id = 4;
    g4.name = 'g4';
    g4.text = 'g4';
    const g5 = new GoodInStock();
    g5.id = 5;
    g5.name = 'g5';
    g5.text = 'g5';
    const g6 = new GoodInStock();
    g6.id = 6;
    g6.name = 'g6';
    g6.text = 'g6';
    o2.goodsInStock.push(g4,g5,g6);
    const o3 = new Order();
    o3.id = 1000003;
    const g7 = new GoodInStock();
    g7.id = 7;
    g7.name = 'g7';
    g7.text = 'g7';
    const g8 = new GoodInStock();
    g8.id = 8;
    g8.name = 'g8';
    g8.text = 'g8';
    const g9 = new GoodInStock();
    g9.id = 9;
    g9.name = 'g9';
    g9.text = 'g9';
    o3.goodsInStock.push(g7,g8,g9);
    this.orders.push(o1, o2, o3);
  }

  setClickedRow(index, order){
    this.selectedRow = index;
    this.selectedOrder = order;
    this.orderChange.emit(this.orders[index]);
  }

}
