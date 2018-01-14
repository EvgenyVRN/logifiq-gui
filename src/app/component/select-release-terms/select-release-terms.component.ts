import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-release-terms',
  templateUrl: './select-release-terms.component.html',
  styleUrls: ['./select-release-terms.component.css']
})
export class SelectReleaseTermsComponent implements OnInit {
  public items:Array<string> = ['COD', 'CAD', 'BL'];

  public value:any = {};
  public _disabledV = '0';
  public disabled = false;

  constructor() { }

  ngOnInit() {
  }

  private get disabledV():string {
    return this._disabledV;
  }

  private set disabledV(value:string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }

  public selected(value:any):void {
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
