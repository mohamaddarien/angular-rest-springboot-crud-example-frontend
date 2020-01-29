import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      // 'Authorization': 'jwt-token'
    })
  };


@Injectable()
export class RequestHelper{

    constructor(
        // private router: Router,
        private http: HttpClient,
    ) { }

    get(path): Observable<any> {
        return this.http.get(path, httpOptions).pipe(catchError(this.handleError));
      }

    post(path,parameters): Observable<any> {
      console.log(parameters);
        return this.http.post(path, parameters,httpOptions).pipe(catchError(this.handleError));
      }

      handleError(error) {
        console.log(error)
        let errorMessage = '';
        if(error.error instanceof ErrorEvent) {
          // Get client-side error
          errorMessage = error.error.message;
        } else {
          // Get server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
     }

}