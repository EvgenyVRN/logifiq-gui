import { Address } from "../model/address";
import { AddressService } from "../service/address.service";
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select-address',
  templateUrl: './select-address.component.html',
  styleUrls: ['./select-address.component.css']
})
export class SelectAddressComponent implements OnInit {

  addresses: Address[];
  disabled = false;
  @Input() ownerId: number;

  constructor( private addressService: AddressService ) { }

  ngOnInit() {
    this.getAddresses();
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
    // this.addresses.find()
  }

  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }

  public typed(value:any):void {
    console.log('New search input: ', value);
  }

  public refreshValue(value:any):void {

  }
}
