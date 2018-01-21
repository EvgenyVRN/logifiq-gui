import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-select-delivery-terms',
  templateUrl: './select-delivery-terms.component.html',
  styleUrls: ['./select-delivery-terms.component.css']
})
export class SelectDeliveryTermsComponent implements OnInit {

  public items:Array<string> = ['CFR', 'CIF', 'CIP', 'CPT', 'DAF', 'DAP', 'DAT', 'DDP', 'DDU', 'DEQ', 'DES',
                                'EXW', 'FAS', 'FCA', 'FOB', 'ZZZ'];

  public value: any = {};
  public disabled = false;
  public active: Array<string> = [];

  @Input() term: any;
  @Output() termChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (this.term !== ''){
      this.active.push(this.term);
    }

  }

  public selected(value:any):void {
    this.termChange.emit(value.text);
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
