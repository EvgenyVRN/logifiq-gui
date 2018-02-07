import {Component, Inject, OnInit} from '@angular/core';
import {Order} from "../../model/order";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {GoodInStock} from "../../model/good-in-stock";

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
    this.getMockOrders();
  }

  constructor(
    public dialogRef: MatDialogRef<OrderModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  setClickedRow(index, order){
    this.selectedRow = index;
    this.data.order = order;
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
}
