import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SelectItem} from "primeng/api";

@Component({
  selector: 'app-select-release-terms',
  templateUrl: './select-release-terms.component.html',
  styleUrls: ['./select-release-terms.component.css']
})
export class SelectReleaseTermsComponent implements OnInit {
  items:Array<string> = ['COD', 'CAD', 'BL'];
  @Input() term: string;
  @Output() termChange = new EventEmitter();
  @Input() required: boolean;
  selectItems: SelectItem[] = [];

  constructor() {
    this.term = '';
  }

  ngOnInit() {
    this.items.forEach( i => this.fillSelectItem(i));
  }

  private fillSelectItem(str: string){
    this.selectItems.push({label: str, value: str});
  }

  public onTermSelect(){
    this.termChange.emit(this.term);
  }


}
