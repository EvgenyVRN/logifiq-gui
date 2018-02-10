import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Unit } from '../../model/unit';
import { UnitService } from '../../service/unit.service';
import {SelectItem} from "primeng/api";

@Component({
  selector: 'app-select-unit',
  templateUrl: './select-unit.component.html',
  styleUrls: ['./select-unit.component.css']
})
export class SelectUnitComponent implements OnInit {
  public units : Unit[] = [];
  @Input() unit: Unit;
  @Output() unitChange = new EventEmitter();
  @Input() required: boolean;
  selectItems: SelectItem[] = [];

  constructor(
    private unitService: UnitService) { }

  ngOnInit() {
    this.getUnits();
    this.units.forEach(u => this.fillSelectItem(u));
    if (this.unit == null){
      this.unit = new Unit();
    }
  }

  getUnits():void {
    this.unitService.getUnits()
       .subscribe(units => this.units = units);
  }

  private fillSelectItem(unit: Unit){
    this.selectItems.push({label: unit.name, value: unit});
  }

  onItemSelect(){
    this.unitChange.emit(this.unit);
  }
}
