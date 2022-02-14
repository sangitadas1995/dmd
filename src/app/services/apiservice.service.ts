import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse,HttpClientModule } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
//import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';



const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
};
@Injectable({
  providedIn: 'root'
})

export class ApiserviceService {
  constructor(private http: HttpClient) { }
  public base_url:string = "https://iksen.com/new_appoint_book/public/api/";

  allCategory(): Observable<any> {
    return this.http.get(this.base_url+"get-all-category")
      .pipe(
      );
  }

  getServiceListById(data): Observable<any> {
    var header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded', 
        //'Authorization': "Bearer "+token
      })
    }
    let urlSearchParams = new URLSearchParams();
      urlSearchParams.append("category_id", data);
      //let body = urlSearchParams.toString();
      let url = this.base_url+"get-all-service?category_id="+data;
      var result = this.http.get(url, header)
      return result
      .pipe(
        //catchError(this.handleError)
      );
  }

  getServiceDetailsById(data): Observable<any> {
    var header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded', 
        //'Authorization': "Bearer "+token
      })
    }
    let urlSearchParams = new URLSearchParams();
      urlSearchParams.append("service_id", data);
      //let body = urlSearchParams.toString();
      let url = this.base_url+"get-service-details?service_id="+data;
      var result = this.http.get(url, header)
      return result
      .pipe(
        //catchError(this.handleError)
      );
  }

  dateWiseTime(data): Observable<any> {
     var header = {
       headers: new HttpHeaders({
         'Content-Type': 'application/x-www-form-urlencoded', 
         //'Authorization': "Bearer "+token
       })
     }
      let urlSearchParams = new URLSearchParams();
      urlSearchParams.append('bookingDate', data);
       let body = urlSearchParams.toString();
     
        return this.http.post(this.base_url+"get-booking-slots", body, header)
       .pipe(
         //catchError(this.handleError)
       );
   }
}
