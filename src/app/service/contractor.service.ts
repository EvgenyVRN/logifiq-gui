import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Contractor } from '../model/contractor';
import {Globals} from "../model/globals";

@Injectable()
export class ContractorService {
  title = 'Contractor';

  private consignmentUrl = '/registry/contractors';

  constructor( private http: HttpClient,
               private global:Globals) { }

  getContractors(): Observable<Contractor[]> {
    const headers = new HttpHeaders()
      .append("Authorization", "Basic dGVzdGVyOnRlc3Rlcg==");
    const params = new HttpParams().set('enabled', String(true));
    return this.http.get<Contractor[]>(this.global.host+this.consignmentUrl, {headers: headers, params: params});
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
