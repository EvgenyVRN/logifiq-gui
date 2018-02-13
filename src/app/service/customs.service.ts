import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { Customs } from '../model/customs';
import {SettingsService} from "./settings.service";

@Injectable()
export class CustomsService {
  title = 'Contractor';

  private customsUrl = '/rest/registry/customs/';

  constructor( private http: HttpClient ) { }

  getCustoms(): Observable<Customs[]> {
    return this.http.get<Customs[]>(SettingsService.getFullUrl(this.customsUrl + 'enabled'),
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
