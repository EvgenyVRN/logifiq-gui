import { Consignment } from './consignment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ConsignmentService {

  private consignmentUrl = 'localhost:8080/expedition/consignments/';

  constructor( private http: HttpClient ) { }

  getConsignment( id: number ): Observable<Consignment> {
    return this.http.get<Consignment>(this.consignmentUrl + id);
  }

  getConsignments(): Observable<Consignment[]> {
    return this.http.get<Consignment[]>(this.consignmentUrl);
  }

}
