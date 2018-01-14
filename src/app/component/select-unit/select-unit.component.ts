import { Component, OnInit } from '@angular/core';
import { Unit } from '../../model/unit';
import { UnitService } from '../../service/unit.service';

@Component({
  selector: 'app-select-unit',
  templateUrl: './select-unit.component.html',
  styleUrls: ['./select-unit.component.css']
})
export class SelectUnitComponent implements OnInit {
  public units : Unit[];
  private value:any = {};
  public disabled = false;

  constructor(
    private unitService: UnitService) { }

  ngOnInit() {
    this.getUnits();
  }

  getUnits():void {
    this.unitService.getUnits()
       .subscribe(unit => this.unitAnswer(unit));
  }

  private unitAnswer(units : Unit[]) {
    this.units = units;
    this.units.forEach((unit : Unit) => {
      unit.text = unit.name;
    });
  }

  public selected(value:any):void {
    console.log('Selected value is: ', value);
    const u = this.units.find(unit => unit.id === value.id);
    console.log('Unit: ', u);
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