import {Component, Inject, OnInit} from '@angular/core';
import {Order} from "../../model/order";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {GoodInStock} from "../../model/good-in-stock";
import {OrderService} from "../../service/order.service";

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.css']
})
export class OrderModalComponent implements OnInit {
  selectedRow: number;
  selectedOrder: Order;
  orders: Order[] = [];


  ngOnInit(): void {
   this.getOrders();
  }

  constructor(
    public dialogRef: MatDialogRef<OrderModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private orderService: OrderService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  setClickedRow(index, order){
    this.selectedRow = index;
    this.data.order = order;
  }

  getOrders(){
    this.orderService.getOrders().subscribe(orders => this.orders = orders);
  }

}
