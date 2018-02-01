import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Order} from "../../model/order";
import {OrderService} from "../../service/order.service";

@Component({
  selector: 'app-choose-order',
  templateUrl: './choose-order.component.html',
  styleUrls: ['./choose-order.component.css']
})
export class ChooseOrderComponent implements OnInit {
  @Output() orderChange = new EventEmitter();
  orders: Array<Order> = [];
  selectedRow: number;
  selectedOrder: number;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.getOrders();
    this.getMockOrders();
  }

  getOrders(){
    this.orderService.getOrders().subscribe(orders => this.orders = orders);
  }

  getMockOrders(){
    const o1 = new Order();
    o1.id = 1000001;
    const o2 = new Order();
    o2.id = 1000002;
    const o3 = new Order();
    o3.id = 1000003;
    this.orders.push(o1, o2, o3);
  }

  setClickedRow(index, id){
    this.selectedRow = index;
    this.selectedOrder = id;
    this.orderChange.emit(this.selectedOrder);
  }

}
