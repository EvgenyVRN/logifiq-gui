import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SelectItem} from "primeng/api";

@Component({
  selector: 'app-select-transport-mode',
  templateUrl: './select-transport-mode.component.html',
  styleUrls: ['./select-transport-mode.component.css']
})
export class SelectTransportModeComponent implements OnInit {
  items:Array<string> = ['Boat', 'Railway', 'Road', 'Air', 'Post', 'Fixed', 'Selftransporting'];
  @Input() mode: string;
  @Output() modeChange = new EventEmitter();
  selectItems: SelectItem[] = [];
  @Input() required: boolean;

  constructor() { }

  ngOnInit() {
    this.items.forEach(i => this.fillSelectItem(i));
  }

  private fillSelectItem(str: string){
    this.selectItems.push({label:str, value:str});
  }

  onItemSelect(){
    this.modeChange.emit(this.mode);
  }

}
