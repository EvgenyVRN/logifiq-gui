import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SelectItem} from "primeng/api";

@Component({
  selector: 'app-select-delivery-terms',
  templateUrl: './select-delivery-terms.component.html',
  styleUrls: ['./select-delivery-terms.component.css']
})
export class SelectDeliveryTermsComponent implements OnInit {

  public items:Array<string> = ['CFR', 'CIF', 'CIP', 'CPT', 'DAF', 'DAP', 'DAT', 'DDP', 'DDU', 'DEQ', 'DES',
                                'EXW', 'FAS', 'FCA', 'FOB', 'ZZZ'];

  @Input() term: string;
  @Output() termChange = new EventEmitter();
  @Input() required;
  selectItems: SelectItem[] = [];

  constructor() { }

  ngOnInit() {
    this.items.forEach( i => this.fillSelectItems(i));
  }

  private fillSelectItems(str : string){
    this.selectItems.push({label: str, value: str});
  }

  public onTermSelect(){
    this.termChange.emit(this.term);
  }

}
