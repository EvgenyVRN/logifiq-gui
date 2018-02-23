import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';
import {Contract} from "../../model/contract";
import {ContractService} from "../../service/contract.service";
import {Contractor} from "../../model/contractor";
import {SelectItem} from "primeng/api";

@Component({
  selector: 'app-select-contract',
  templateUrl: './select-contract.component.html',
  styleUrls: ['./select-contract.component.css']
})
export class SelectContractComponent implements OnInit{
  public contracts : Contract[] = [];
  @Input() contract: Contract;
  @Output() contractChange = new EventEmitter();
  @Input() contractor: Contractor;
  @Input() disabled: boolean;
  selectItems: SelectItem[] = [];
  @Input() required: boolean;

  constructor(
    private contractService: ContractService) {
    // this.contract = new Contract;
  }

  ngOnInit() {
    this.getContracts();
  }
  private fillSelectItems(contract: Contract){
    this.selectItems.push({label: contract.name, value: contract});
  }

  getContracts():void {
    if (this.contractor == null){
      return;
    }

    this.contractService.getContractsByContractor(this.contractor.id)
      .subscribe(contracts => {
        this.contracts = contracts;
        this.contracts.forEach(c => this.fillSelectItems(c));
      });
  }

  public onContractSelect(){
    this.contractChange.emit(this.contract);
  }

}
