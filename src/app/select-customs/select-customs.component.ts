import { Component, OnInit } from '@angular/core';
import { Customs } from '../model/customs';
import { CustomsService } from '../service/customs.service';

@Component({
  selector: 'app-select-customs',
  templateUrl: './select-customs.component.html',
  styleUrls: ['./select-customs.component.css']
})
export class SelectCustomsComponent implements OnInit {
  public customs:Customs[];
  public strings:Array<string>;
  private value:any = {};
  public disabled = false;

  constructor(
    private customsService: CustomsService) { }

  ngOnInit() {
    this.getCustoms();
  }

  getCustoms():void {
    this.customsService.getCustoms()
       .subscribe(customs => this.customsAnswer(customs));
  }

  private customsAnswer(customs: Customs[]) {
    this.customs = customs;
    this.customs.forEach((custom: Customs) => {
      custom.text = custom.name;
    });
  }

  public selected(value:any):void {
    console.log('Selected value is: ', value);
    const contr = this.customs.find(contractor => contractor.id === value.id);
    console.log('Contractor: ', contr);
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
