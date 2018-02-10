import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import {startWith} from "rxjs/operators/startWith";
import {map} from "rxjs/operators/map";

@Component({
  selector: 'app-select-cons-direction',
  templateUrl: './select-cons-direction.component.html',
  styleUrls: ['./select-cons-direction.component.css']
})
export class SelectConsDirectionComponent implements OnInit {
  public directions:Array<string> = ['Import', 'Export'];

  @Input() direction: any;
  @Output() directionChange = new EventEmitter();
  stateCtrl: FormControl;
  filteredDirections: Observable<any[]>;

  constructor() {
    this.stateCtrl = new FormControl();
    this.filteredDirections = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(d => d ? this.filterDirections(d) : this.directions.slice())
      );
  }

  filterDirections(direction: string){
    return this.directions.filter(dir =>
      dir.toLowerCase().indexOf(direction.toLowerCase()) === 0);
  }

  onOptionSelect(){

  }

  ngOnInit() {

  }
}
