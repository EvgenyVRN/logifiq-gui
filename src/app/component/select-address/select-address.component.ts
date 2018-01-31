import { Address } from "../../model/address";
import { AddressService } from "../../service/address.service";
import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-select-address',
  templateUrl: './select-address.component.html',
  styleUrls: ['./select-address.component.css']
})
export class SelectAddressComponent implements OnInit {

  addresses: Address[];
  disabled = false;
  @Input() ownerId: number;
  @Input() address: Address;
  @Output() addressChange= new EventEmitter();
  public active: Address[] = [];

  constructor( private addressService: AddressService ) { }

  ngOnInit() {
    this.getAddresses();
    if (this.address == null){
      this.address = new Address();
    } else {
      this.addTextField(this.address);
      this.active.push(this.address);
    }
  }

  getAddresses(): void {
    this.addressService.getAddresses()
      .subscribe(addresses => this.addressesAnswer(addresses));
  }

  private addressesAnswer(addresses: Address[]): void {
    this.addresses = addresses;
    this.addresses.forEach((address: Address) => {
      address.text = address.index + ', ' + address.country.country + ', ' + address.region + ', ' + address.city + ', ' + address.street + ', ' + address.apt;
    });
  }

  public selected(value:any):void {
    console.log('Selected value is: ', value);
    this.address = this.addresses.find(address => address.id === value.id);
    this.addressChange.emit(value);
  }

  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }

  public typed(value:any):void {
    console.log('New search input: ', value);
  }

  public refreshValue(value:any):void {

  }

  private addTextField(address: Address):void{
    address.text = address.index + ', ' + address.country.country + ', ' + address.region + ', ' + address.city + ', ' + address.street + ', ' + address.apt;
  }
}
