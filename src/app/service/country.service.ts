import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Country} from "../model/country";
import {of} from "rxjs/observable/of";
import {SettingsService} from "./settings.service";

@Injectable()
export class CountryService {
  title = 'Country';

  private countriesUrl = '/registry/addresses/countries/';

  constructor( private http: HttpClient ) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(SettingsService.getFullUrl(this.countriesUrl),
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
