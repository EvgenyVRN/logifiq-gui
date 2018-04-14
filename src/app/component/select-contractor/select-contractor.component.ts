import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contractor } from '../../model/contractor';
import { ContractorService } from '../../service/contractor.service';
import {FormControl} from "@angular/forms";
import {map, startWith} from "rxjs/operators";
import {Observable} from "rxjs/Observable";
import {SelectItem} from "primeng/api";

@Component({
  selector: 'app-select-contractor',
  templateUrl: './select-contractor.component.html',
  styleUrls: ['./select-contractor.component.css']
})
export class SelectContractorComponent implements OnInit {

  public contractors:Contractor[] = [];

  @Input() contractorType: string;
  @Input() contractor: Contractor;
  @Output() contractorChange = new EventEmitter();
  selectItems: SelectItem[];
  @Input() required: boolean;
  @Input() disabled = false;

  constructor(private contractorService: ContractorService) {

  }

  ngOnInit() {
    this.getContractors();
  }

  getContractors():void {
    this.contractorService.getContractors()
       .subscribe(contractors => {
         this.contractors = contractors;
         this.selectItems = [];
         this.contractors.forEach(c => this.fillSelectItems(c));
       });
  }

  private fillSelectItems(contractor: Contractor){
    this.selectItems.push({label: contractor.name, value: contractor});
  }

  onContractorSelect(){
    this.contractorChange.emit(this.contractor);
  }



}
