import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http'
import { Observable } from 'rxjs/Rx';

/*
  Generated class for the RequestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RequestProvider {

  constructor(private jsonp: Jsonp) {
    console.log('Hello RequestProvider Provider');
  }

  sendRequest(url: string):Observable<any> {
    return this.jsonp.request(url);
  }
}
