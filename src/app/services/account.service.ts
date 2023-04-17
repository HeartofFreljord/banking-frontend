import {Injectable} from '@angular/core';
import {IAccount} from "../models/Account";
import {ICustomer} from "../models/Customer";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private currentAccount: IAccount = {} as IAccount;
  url: string = "http://localhost:8080"

  constructor(private http: HttpClient) {
  }

  public getAccountsByCustomer(customer: ICustomer): Observable<IAccount[]>{
    return this.http.put<IAccount[]>(this.url + "/accounts", JSON.stringify(customer), httpOptions);
  }

  public getAccountById(id: number): Observable<IAccount>{
    return this.http.get<IAccount>(this.url + "/account/" + id).pipe(
      tap(account => {
        console.log(account);
      })
    );
  }
}
