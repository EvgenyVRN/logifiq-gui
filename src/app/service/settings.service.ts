import { Injectable } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";

@Injectable()
export class SettingsService {

   // private static _host = 'http://138.197.186.218';
  private static _host = 'http://localhost:8080';
  private static _remoteRest = true;
  private static _headers = new HttpHeaders({"Authorization":"Basic dGVzdGVyOnRlc3Rlcg=="});

  constructor() {
  }

  static get remote(): boolean {
    return this._remoteRest;
  }

  static set remote(value: boolean) {
    this._remoteRest = value;
  }

  static get host(): string{
    return this._host;
  }

  static set host(value: string) {
    this._host = value;
  }

  static get headers(): HttpHeaders {
    if (this._remoteRest === true){
      return this._headers;
    } else {
      return null;
    }
  }

  static getFullUrl(relativeUrl: string):string{
    if (this._remoteRest === true){
      return this._host + relativeUrl;
    } else {
      return relativeUrl;
    }
  }

}
