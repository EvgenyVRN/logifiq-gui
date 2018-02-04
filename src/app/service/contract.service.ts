import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Contract} from "../model/contract";
import {of} from "rxjs/observable/of";

@Injectable()
export class ContractService {
  title = 'Contract';

  private contractsUrl = '/registry/contracts/';

  constructor( private http: HttpClient ) { }

  getContracts(): Observable<Contract[]> {
    return this.http.get<Contract[]>(this.contractsUrl + 'enabled');
  }

  getContractsByContractor(id: number): Observable<Contract[]> {
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    const params = new HttpParams().set('contractor', String(id));
    return this.http.get<Contract[]>(this.contractsUrl, {headers: headers, params : params});
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
