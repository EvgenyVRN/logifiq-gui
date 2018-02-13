import { Address } from "../model/address";
import {HttpClient, HttpParams} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import {SettingsService} from "./settings.service";

@Injectable()
export class AddressService {

  private addressURL = '/registry/addresses/';

  constructor( private http: HttpClient ) { }

  getAddresses(): Observable<Address[]> {
    return this.http.get<Address[]>(SettingsService.getFullUrl(this.addressURL + 'enabled'),
      {headers: SettingsService.headers, params: null});
  }

  getAddressesByOwner(id: number): Observable<Address[]> {
    return this.http.get<Address[]>(SettingsService.getFullUrl(this.addressURL + 'getEnabledWithOwner/' + id),
      {headers: SettingsService.headers, params: null});
  }

  // TODO: catch exceptions
}
