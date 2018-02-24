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
  selectItems: SelectItem[] = [];
  selectedItem: Contract;

  @Input() disabled: boolean;
  @Input() required: boolean;

  constructor(
    private contractService: ContractService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('select contract on changes');
    const contractor: SimpleChange = changes.contractor;
    if (contractor != null && contractor.currentValue != null){
      this.getContractsByContractor();
    } else {
      this.getAllContracts();
    }
    console.log('select contract on changes end');
  }

  getContractsByContractor():void {
    this.contractService.getContractsByContractor(this.contractor.id)
      .subscribe(contracts => {
        this.contracts = contracts;
        this.fillSelectItems();
        console.log('before assign selected item');
        this.selectedItem = this.contract;
      });
  }

  getAllContracts():void{
    this.contractService.getContracts()
      .subscribe(contracts => {
        this.contracts = contracts;
        this.fillSelectItems();
        console.log('before assign selected item');
        this.selectedItem = this.contract;
      });
  }

  public onContractSelect(){
    this.contractChange.emit(this.selectedItem);
  }

  fillSelectItems():void{
    console.log('filling select items');
    this.contracts.forEach(c => this.selectItems.push({label: c.name, value: c}));
    console.log('filling select items end');
  }

}
