import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-select-transport-mode',
  templateUrl: './select-transport-mode.component.html',
  styleUrls: ['./select-transport-mode.component.css']
})
export class SelectTransportModeComponent implements OnInit {
  public items:Array<string> = ['Boat', 'Railway', 'Road', 'Air', 'Post', 'Fixed', 'Selftransporting'];

  public value:any = {};
  public _disabledV = '0';
  public disabled = false;

  @Input() mode: string;
  @Output() modeChange = new EventEmitter();
  public active: string[] = [];

  constructor() { }

  ngOnInit() {
    if (this.mode !== ''){
      this.active.push(this.mode);
    }
  }


  private get disabledV():string {
    return this._disabledV;
  }

  private set disabledV(value:string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }

  public selected(value:any):void {
    this.modeChange.emit(this.mode);
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
