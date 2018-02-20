/**
 *  @evgeny
 */
import { Consignment } from '../model/consignment';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import {SettingsService} from "./settings.service";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ConsignmentService {
  title = 'Consignment';

  private consignmentUrl = '/rest/expedition/consignments';

  constructor( private http: HttpClient ) { }

  getConsignment( id: number ): Observable<Consignment> {
    const url = `${this.consignmentUrl}/${id}`;
    return this.http.get<Consignment>(SettingsService.getFullUrl(url),
      {headers: SettingsService.headers}).pipe(
      catchError(this.handleError<Consignment>('getConsignment id=${id}'))
    );
  }

  getConsignments(): Observable<Consignment[]> {
    let params = new HttpParams().set("enabled", String(true));
    return this.http.get<Consignment[]>(SettingsService.getFullUrl(this.consignmentUrl),
      {headers: SettingsService.headers, params: params});
  }

  updateConsignment( consignment: Consignment ): Observable<Consignment> {
    const url = `${this.consignmentUrl}/${consignment.id}`;
    return this.http.put(SettingsService.getFullUrl(url), consignment, {headers: SettingsService.headers})
      .pipe(catchError(this.handleError<any>('updateConsignment id = ${consignment.id}'))
    );
  }

  createConsignment( consignment: Consignment ): Observable<Consignment> {
    return this.http.post<Consignment>(SettingsService.getFullUrl(this.consignmentUrl), consignment, {headers: SettingsService.headers})
      .pipe(catchError(this.handleError<Consignment>('createConsignment'))
    );
  }

  deleteConsignment(consignment: Consignment | number): Observable<Consignment> {
    const id = typeof consignment === 'number' ? consignment : consignment.id;
    const url = `${this.consignmentUrl}/${id}`;
    return this.http.delete<Consignment>(SettingsService.getFullUrl(url), {headers: SettingsService.headers})
      .pipe(catchError(this.handleError<Consignment>('deleteConsignment'))
    );
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
