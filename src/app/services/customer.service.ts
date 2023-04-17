import {Injectable} from '@angular/core';
import {ICustomer} from "../models/Customer";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, observable, Observable, of, tap} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private currentCustomer: ICustomer = {} as ICustomer;
  url: string = "http://localhost:8080"


  constructor(private http: HttpClient) {
  }

  public authenticateCustomer(email: string, password: string): Observable<ICustomer> {
    return this.http.put<ICustomer>(this.url + "/auth", JSON.stringify([email, password]), httpOptions).pipe(
      tap( value => {
        this.currentCustomer = value;
        localStorage.setItem("currentCustomer", JSON.stringify(this.currentCustomer));
        console.log(JSON.stringify(this.currentCustomer))
      })
    );
  }

  public getCurrentCustomer() {
    return JSON.parse(localStorage.getItem("currentCustomer")!);
  }
}
