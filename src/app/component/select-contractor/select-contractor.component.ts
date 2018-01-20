import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contractor } from '../../model/contractor';
import { ContractorService } from '../../service/contractor.service';

@Component({
  selector: 'app-select-contractor',
  templateUrl: './select-contractor.component.html',
  styleUrls: ['./select-contractor.component.css']
})
export class SelectContractorComponent implements OnInit {

  public contractors:Contractor[];
  public active: Contractor[] = [];

  @Input() contractorType: string;
  @Input() contractor: Contractor;
  @Output() contractorChange = new EventEmitter();

  private value:any = {};
  public disabled = false;

  constructor(
    private contractorService: ContractorService) { }

  ngOnInit() {
    this.getContractors();
    if (this.contractor == null){

    } else {
      this.contractor.text = this.contractor.name;
      this.active.push(this.contractor);
    }
  }

  getContractors():void {
    this.contractorService.getContractors()
       .subscribe(contractors => this.contractorsAnswer(contractors));
  }

  private contractorsAnswer(contractors: Contractor[]) {
    this.contractors = contractors;
//    this.contractors.forEach((contractor: Contractor) => {
//      this.items.push({
//        id: contractor.id,
//        text: contractor.name
//      });
//    });
    this.contractors.forEach((contractor: Contractor) => {
      contractor.text = contractor.name;
    });
  }

  getMockContractors():void {
    const c1 = new Contractor();
    c1.id = 1;
    c1.name = "Contractor1";
    const c2 = new Contractor();
    c2.id = 2;
    c2.name = "Contractor2";
    const c3 = new Contractor();
    c3.id = 3;
    c3.name = "Contractor3";
    const mockArray = [c1, c2, c3];
    this.contractors = mockArray;
  }

  public selected(value:any):void {
    this.contractor = this.contractors.find(contractor => contractor.id === value.id);
    this.contractorChange.emit(this.contractor);
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
