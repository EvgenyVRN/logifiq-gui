import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Customs } from '../../model/customs';
import { CustomsService } from '../../service/customs.service';

@Component({
  selector: 'app-select-customs',
  templateUrl: './select-customs.component.html',
  styleUrls: ['./select-customs.component.css']
})
export class SelectCustomsComponent implements OnInit {
  public customs:Customs[];
  @Input() custom: Customs;
  @Output() customsChange = new EventEmitter();
  public active: Customs[] = [];
  private value:any = {};
  public disabled = false;

  constructor(
    private customsService: CustomsService) { }

  ngOnInit() {
    this.getCustoms();
    if (this.custom != null){
      this.custom.text = this.custom.name;
      this.active.push(this.custom);
    }

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
    this.customsChange.emit(this.custom);
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
