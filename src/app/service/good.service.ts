import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Good } from '../model/good';
import {SettingsService} from "./settings.service";

@Injectable()
export class GoodService {
  title = 'Good';

  private goodUrl = '/registry/goods/';

  constructor( private http: HttpClient ) { }

  getGoods(): Observable<Good[]> {
    let params = new HttpParams()
      .set("enabled", String(true));
    return this.http.get<Good[]>(SettingsService.getFullUrl(this.goodUrl),
      {headers: SettingsService.headers, params: params})
      .pipe(catchError(this.handleError<Good[]>("GoodService: Fetching goods")));
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
