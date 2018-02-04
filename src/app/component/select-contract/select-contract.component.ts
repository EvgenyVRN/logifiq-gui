import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';
import {Contract} from "../../model/contract";
import {ContractService} from "../../service/contract.service";
import {Contractor} from "../../model/contractor";

@Component({
  selector: 'app-select-contract',
  templateUrl: './select-contract.component.html',
  styleUrls: ['./select-contract.component.css']
})
export class SelectContractComponent implements OnInit, OnChanges {
  public contracts : Contract[];
  @Input() contract: Contract;
  @Output() contractChange = new EventEmitter();
  @Input() contractor: Contractor;
  public active: Contract[] = [];
  private value:any = {};
  @Input() disabled;

  constructor(
    private contractService: ContractService) { }

  ngOnInit() {
    this.getContracts();
    if (this.contract != null){
      this.contract.text = this.contract.name;
      this.active.push(this.contract);
    }
  }


  ngOnChanges(changes: SimpleChanges): void {
    const contractor: SimpleChange = changes.contractor;
    if (contractor !== null){
      this.getContracts();
    }
  }


  getContracts():void {
    if (this.contractor == null){
      return;
    }

    this.contractService.getContractsByContractor(this.contractor.id)
      .subscribe(contract => this.contractAnswer(contract));
  }

  private contractAnswer(contracts: Contract[]) {
    this.contracts = contracts;
    this.contracts.forEach((contract : Contract) => {
      contract.text = contract.name;
    });
  }

  public selected(value:any):void {
    console.log('Selected value is: ', value);
    this.contractChange.emit(value);
  }
/**/
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
