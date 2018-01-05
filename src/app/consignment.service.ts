/**
 *  @evgeny
 */
import { Consignment } from './model/consignment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

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
    return this.http.get<Consignment>(url).pipe(
      catchError(this.handleError<Consignment>('getConsignment id=${id}'))
    );
  }

  getConsignments(): Observable<Consignment[]> {
    return this.http.get<Consignment[]>(this.consignmentUrl);
  }

  updateConsignment( consignment: Consignment ): Observable<Consignment> {
    const url = `${this.consignmentUrl}/${consignment.id}`;
    return this.http.put(url, consignment, httpOptions).pipe(
      catchError(this.handleError<any>('updateConsignment id = ${consignment.id}'))
    );
  }

  createConsignment( consignment: Consignment ): Observable<Consignment> {
    return this.http.post<Consignment>(this.consignmentUrl, consignment, httpOptions).pipe(
      catchError(this.handleError<Consignment>('createHero'))
    );
  }

  deleteConsignment(consignment: Consignment | number): Observable<Consignment> {
    const id = typeof consignment === 'number' ? consignment : consignment.id;
    const url = `${this.consignmentUrl}/${id}`;
    return this.http.delete<Consignment>(url, httpOptions).pipe(
      catchError(this.handleError<Consignment>('deleteConsignment'))
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
