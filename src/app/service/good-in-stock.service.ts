import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GoodInStock} from "../model/good-in-stock";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {SettingsService} from "./settings.service";

@Injectable()
export class GoodInStockService {
  title = 'Good in stock';

  private url = '/warehouse/goodInStocks/';

  constructor( private http: HttpClient ) { }

  getGoods(): Observable<GoodInStock[]> {
    return this.http.get<GoodInStock[]>(SettingsService.getFullUrl(this.url),
      { headers: SettingsService.headers});
  }

  getByOrder(id: number): Observable<GoodInStock[]>{
    return this.http.get<GoodInStock[]>(SettingsService.getFullUrl(this.url + 'for_order/' + id),
      {headers: SettingsService.headers});
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
