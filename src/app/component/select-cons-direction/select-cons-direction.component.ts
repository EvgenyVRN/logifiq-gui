import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import {startWith} from "rxjs/operators/startWith";
import {map} from "rxjs/operators/map";
import {SelectItem} from "primeng/api";

@Component({
  selector: 'app-select-cons-direction',
  templateUrl: './select-cons-direction.component.html',
  styleUrls: ['./select-cons-direction.component.css']
})
export class SelectConsDirectionComponent implements OnInit {
  directions:Array<string> = ['Import', 'Export'];
  @Input() direction: string = '';
  @Output() directionChange = new EventEmitter();
  @Input() required: boolean;
  selectItems: SelectItem[] = [];

  constructor() {

  }

  ngOnInit() {
    this.directions.forEach(d => this.fillSelectItem(d));
  }

  onItemSelect(){
    this.directionChange.emit(this.direction);
  }

  private fillSelectItem(str: string){
    this.selectItems.push({label: str, value: str});
  }
}
