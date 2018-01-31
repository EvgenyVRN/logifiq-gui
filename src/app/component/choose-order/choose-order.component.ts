import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Order} from "../../model/order";
import {OrderService} from "../../service/order.service";

@Component({
  selector: 'app-choose-order',
  templateUrl: './choose-order.component.html',
  styleUrls: ['./choose-order.component.css']
})
export class ChooseOrderComponent implements OnInit {
  @Output() idChange = new EventEmitter();
  orders: Order[];
  selectedRow: number;
  selectedOrder: number;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.getOrders();
  }

  idChangeEvent(): void{
    this.idChange.emit(this.selectedOrder);
  }

  getOrders(){
    this.orderService.getOrders().subscribe(orders => this.orders = orders);
  }

  setClickedRow(index, id){
    this.selectedRow = index;
    this.selectedOrder = id;
  }

}
