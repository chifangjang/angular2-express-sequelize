import { Injectable } from '@angular/core';
import { Http, Headers,Response,RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {

  token: string;

  constructor( private http: Http ) {
  }

    private loginUrl = '/login' ;

  login( username, password ) {

    let body = JSON.stringify({ 'name':'noProbelm9999' , 'password' : password });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.loginUrl , body, options)
                    .map(this.extractData)
                    .catch(this.handleError);	


/*
    return this.http.get(this.loginUrl+'?name='+username+'&password='+password)
                    .map(this.extractData)
                    .catch(this.handleError);
*/
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    
    let body = res.json();
    console.log( "print result :"+body.result );
if( body.result ){
   return body.data || { };
}else{

      throw new Error('test this is chifangjang  Bad response status: ' + res.status);
}
  }

  private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
