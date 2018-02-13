import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Order} from "../model/order";
import {of} from "rxjs/observable/of";
import {SettingsService} from "./settings.service";

@Injectable()
export class OrderService {
  title = 'Order';

  private orderUrl = '/warehouse/orders';

  constructor( private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    let params = new HttpParams().set('enabled', String(true));
    return this.http.get<Order[]>(SettingsService.getFullUrl(this.orderUrl),
      {headers: SettingsService.headers, params : params});
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
