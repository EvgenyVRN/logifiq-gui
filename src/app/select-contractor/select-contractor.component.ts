import { Component, OnInit, Input } from '@angular/core';
import { Contractor } from '../model/contractor';
import { ContractorService } from '../service/contractor.service';

@Component({
  selector: 'app-select-contractor',
  templateUrl: './select-contractor.component.html',
  styleUrls: ['./select-contractor.component.css']
})
export class SelectContractorComponent implements OnInit {

  public contractors:Contractor[];

  public strings:Array<string>;

  @Input() contractorType: string;

  private value:any = {};
  private disabled = false;

  constructor(
    private contractorService: ContractorService) { }

  ngOnInit() {
    // this.getContractors();
    this.getMockContractors();
  }

  getContractors():void {
    this.contractorService.getContractors()
       .subscribe(contractors => this.contractors = contractors);
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
    const mockArray = [c1, c2, c3];
    this.contractors = mockArray;
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
