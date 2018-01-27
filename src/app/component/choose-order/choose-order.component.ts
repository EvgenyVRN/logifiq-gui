import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-choose-order',
  templateUrl: './choose-order.component.html',
  styleUrls: ['./choose-order.component.css']
})
export class ChooseOrderComponent implements OnInit {
  private id: number;
  @Output() idChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  idBlur(): void{
    this.idChange.emit(this.id);
  }

}
