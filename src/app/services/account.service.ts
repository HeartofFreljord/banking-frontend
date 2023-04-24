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
  private currentAccount: Observable<IAccount> = {} as Observable<IAccount>;
  url: string = "http://localhost:8080"

  constructor(private http: HttpClient) {
  }

  public getAccountsByCustomer(customer: ICustomer): Observable<IAccount[]>{
    return this.http.put<IAccount[]>(this.url + "/accounts", JSON.stringify(customer), httpOptions);
  }

  public getAccountById(id: number): Observable<IAccount>{
    this.currentAccount = this.http.get<IAccount>(this.url + "/account/" + id);
    return this.currentAccount;
  }

  public getCurrentAccount(): Observable<IAccount> {
    return this.currentAccount;
  }

}
