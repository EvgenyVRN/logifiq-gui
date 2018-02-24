import { Address } from "../../model/address";
import { AddressService } from "../../service/address.service";
import {Component, OnInit, Input, EventEmitter, Output, SimpleChanges, SimpleChange, OnChanges} from '@angular/core';
import {Country} from "../../model/country";
import {SelectItem} from "primeng/api";

@Component({
  selector: 'app-select-address',
  templateUrl: './select-address.component.html',
  styleUrls: ['./select-address.component.css']
})
export class SelectAddressComponent implements OnInit, OnChanges {

  addresses: Address[];
  @Input() ownerId: number;
  @Input() address: Address;
  selectItems: SelectItem[] = [];
  @Output() addressChange= new EventEmitter();
  @Input() required: boolean;

  constructor( private addressService: AddressService ) {
    // this.address = new Address();
  }

  ngOnInit() {
    this.getAllAddresses();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const ownerId: SimpleChange = changes.ownerId;
    this.selectItems = [];
    if (ownerId != null && ownerId.currentValue != null){
      this.getAddresses();
    } else {
      this.getAllAddresses();
    }
  }

  private fillSelectItems(address: Address) {
    this.selectItems.push({label: this.getFullAddress(address), value: address});
  }

  getAddresses(): void {
    this.addressService.getAddressesByOwner(this.ownerId)
      .subscribe(addresses => {
        this.addresses = addresses;
        this.addresses.forEach(address => this.fillSelectItems(address));
      });
  }

  getAllAddresses():void{
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

  onAptChange(event){
    this.createIfEmpty();
    this.address.apt = event;
  }

  onStreetChange(event){
    this.createIfEmpty();
    this.address.street = event;
  }

  onIndexChange(event){
    this.createIfEmpty();
    this.address.index = event;
  }

  onCityChange(event){
    this.createIfEmpty();
    this.address.city = event;
  }

  onCountryChange(event){
    this.createIfEmpty();
    this.address.country = event;
  }

  private createIfEmpty(){
    if (this.address == null){
      this.address = new Address;
    }
  }
}
