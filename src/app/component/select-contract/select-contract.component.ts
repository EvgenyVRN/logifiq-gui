import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contract} from "../../model/contract";
import {ContractService} from "../../service/contract.service";

@Component({
  selector: 'app-select-contract',
  templateUrl: './select-contract.component.html',
  styleUrls: ['./select-contract.component.css']
})
export class SelectContractComponent implements OnInit {
  public contracts : Contract[];
  @Input() contract: Contract;
  @Output() contractChange = new EventEmitter();
  public active: Contract[] = [];
  private value:any = {};
  public disabled = false;

  constructor(
    private contractService: ContractService) { }

  ngOnInit() {
    this.getContracts();
    if (this.contract != null){
      this.contract.text = this.contract.name;
      this.active.push(this.contract);
    }
  }

  getContracts():void {
    this.contractService.getContracts()
      .subscribe(good => this.goodAnswer(good));
  }

  private goodAnswer(contracts: Contract[]) {
    this.contracts = contracts;
    this.contracts.forEach((contract : Contract) => {
      contract.text = contract.name;
    });
  }

  public selected(value:any):void {
    console.log('Selected value is: ', value);
    this.contractChange.emit(this.contract);
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
