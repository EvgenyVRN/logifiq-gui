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
export class SelectContractComponent implements OnChanges{
  public contracts : Contract[] = [];
  @Input() contract: Contract;
  @Output() contractChange = new EventEmitter();
  @Input() contractor: Contractor;
  selectItems: SelectItem[];

  @Input() disabled: boolean;
  @Input() required: boolean;

  constructor(
    private contractService: ContractService) {
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.getAllContracts();
    const contractor: SimpleChange = changes.contractor;
    this.selectItems = [];
    if (contractor != null && contractor.currentValue != null){
      this.getContractsByContractor();
    }
  }

  private fillSelectItems(contract: Contract){
    this.selectItems.push({label: contract.name, value: contract});
  }

  getContractsByContractor():void {
    this.contractService.getContractsByContractor(this.contractor.id)
      .subscribe(contracts => {
        this.contracts = contracts;
        this.contracts.forEach(c => this.fillSelectItems(c));
      });
  }

  getAllContracts():void{
    this.contractService.getContracts()
      .subscribe(contracts => {
        this.contracts = contracts;
        this.contracts.forEach(c => this.fillSelectItems(c));
      });
  }

  public onContractSelect(){
    this.contractChange.emit(this.contract);
  }

}
