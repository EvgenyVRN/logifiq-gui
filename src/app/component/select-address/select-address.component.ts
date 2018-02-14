import { Address } from "../../model/address";
import { AddressService } from "../../service/address.service";
import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Country} from "../../model/country";
import {SelectItem} from "primeng/api";

@Component({
  selector: 'app-select-address',
  templateUrl: './select-address.component.html',
  styleUrls: ['./select-address.component.css']
})
export class SelectAddressComponent implements OnInit {

  addresses: Address[] = [];
  @Input() ownerId: number;
  @Input() address: Address = new Address();
  selectItems: SelectItem[] = [];
  @Output() addressChange= new EventEmitter();

  constructor( private addressService: AddressService ) { }

  ngOnInit() {
    this.getAddresses();
  }

  private fillSelectItems(address: Address) {
    this.selectItems.push({label: this.getFullAddress(address), value: address});
  }

  getMockAddresses(): void{
    let russia = new Country();
    russia.id = 10000001;
    russia.country = "Russia";
    russia.alpha2 = "RU";
    let germany = new Country();
    germany.id = 10000002;
    germany.country = "Germany";
    germany.alpha2 = "GR";
    const a1 = new Address();
    a1.id = 10000001;
    a1.apt = '10';
    a1.city = 'Voronehhhhh';
    a1.country = russia;
    a1.region = 'Voronezhskaya obk.';
    a1.street = 'Leningradskaya';
    const a2 = new Address();
    a2.id = 10000002;
    a2.apt = '10';
    a2.city = 'Voronezzzzz';
    a2.country = russia;
    a2.region = 'Voronezhskaya obk.';
    a2.street = 'Leningradskaya';
    const a3 = new Address();
    a3.id = 10000005;
    a3.apt = '66';
    a3.city = 'Moscow';
    a3.index = "0000007";
    a3.country = germany;
    a3.region = 'Moscow obl.';
    a3.street = 'Red Square';
    this.addresses.push(a1, a2, a3);

  }

  getAddresses(): void {
    this.addressService.getAddresses()
      .subscribe(addresses => {
        this.addresses = addresses;
        this.addresses.forEach(address => this.fillSelectItems(address));
      });
  }

  public onAddressChange():void {
    this.addressChange.emit(this.address);
  }

  private getFullAddress(address: Address):string{
    return address.index + ', ' + address.country.country + ', ' + address.region + ', ' + address.city + ', ' + address.street + ', ' + address.apt;
  }
}
