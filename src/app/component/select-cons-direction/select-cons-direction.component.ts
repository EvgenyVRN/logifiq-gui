import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-select-cons-direction',
  templateUrl: './select-cons-direction.component.html',
  styleUrls: ['./select-cons-direction.component.css']
})
export class SelectConsDirectionComponent implements OnInit {
  public directions:Array<string> = ['Import', 'Export'];

  public value: any = {};
  public disabled = false;
  public active: Array<string> = [];

  @Input() direction: any;
  @Output() directionChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (this.direction !== ''){
      this.active.push(this.direction);
    }
  }

  public selected(value:any):void {
    this.directionChange.emit(this.direction);
    console.log('Selected value is: ', value);
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
