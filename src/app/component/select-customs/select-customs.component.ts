import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Customs } from '../../model/customs';
import { CustomsService } from '../../service/customs.service';
import {SelectItem} from "primeng/api";

@Component({
  selector: 'app-select-customs',
  templateUrl: './select-customs.component.html',
  styleUrls: ['./select-customs.component.css']
})
export class SelectCustomsComponent implements OnInit {
  public customsArray: Customs[] = [];
  @Input() customs: Customs;
  @Output() customsChange = new EventEmitter();
  @Input() required;
  selectItems: SelectItem[] = [];
  constructor(
    private customsService: CustomsService) {
    this.customs = new Customs;
  }

  ngOnInit() {
    this.getCustoms();
  }

  getCustoms():void {
    this.customsService.getCustoms()
       .subscribe(customsArray => {
         this.customsArray = customsArray;
         this.customsArray.forEach(c => this.fillSelectItems(c));
       });
  }

  private fillSelectItems(customs: Customs){
    this.selectItems.push({label: customs.name, value: customs});
  }

  public onCustomsSelect(){
    this.customsChange.emit(this.customs);
  }


}
