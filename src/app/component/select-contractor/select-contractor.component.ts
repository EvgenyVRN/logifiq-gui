import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contractor } from '../../model/contractor';
import { ContractorService } from '../../service/contractor.service';

@Component({
  selector: 'app-select-contractor',
  templateUrl: './select-contractor.component.html',
  styleUrls: ['./select-contractor.component.css']
})
export class SelectContractorComponent implements OnInit {

  public contractors:Contractor[] = [];
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
    this.getMockContractors();
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
    c1.text = "Contractor1";
    const c2 = new Contractor();
    c2.id = 2;
    c2.text = "Contractor2";
    const c3 = new Contractor();
    c3.id = 3;
    c3.text = "Contractor3";
    this.contractors.push(c1, c2, c3);
  }

  public selected(value:any):void {
    this.contractorChange.emit(value);
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
