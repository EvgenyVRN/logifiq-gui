import { Address } from "../model/address";
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable()
export class AddressService {

  private addressURL = '/registry/addresses/';

  constructor( private http: HttpClient ) { }

  getAddresses(): Observable<Address[]> {
    return this.http.get<Address[]>(this.addressURL + 'enabled');
  }

  getAddressesByOwner(id: number): Observable<Address[]> {
    return this.http.get<Address[]>(this.addressURL + 'getEnabledWithOwner/' + id);
  }

  // TODO: catch exceptions
}
