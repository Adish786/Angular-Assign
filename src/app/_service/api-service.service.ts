import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  constructor(private http: HttpClient) {}
  apiUrl = ' http://lab.thinkoverit.com/api/'; //Local Servers

  // http://lab.thinkoverit.com/api/getOTP.php
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }



  getOTP(data): Observable < any > {
    return this.http.post(`${this.apiUrl}/getOTP.php`, data, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',

        })
      }
      
      )
      .pipe(map(this.extractData));
  }
  verifyOtp(data): Observable < any > {
    return this.http.post(`${this.apiUrl}/verifyOTP.php`, data, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',

        })
      }
      
      )
      .pipe(map(this.extractData));
  }



  



}