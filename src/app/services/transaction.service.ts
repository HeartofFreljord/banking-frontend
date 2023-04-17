import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ICustomer} from "../models/Customer";
import {Observable} from "rxjs";
import {IAccount} from "../models/Account";
import {ITransaction} from "../models/Transaction";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  url: string = "http://localhost:8080";

  constructor(private http: HttpClient) {
  }

  public getTransactionByAccount(account: IAccount): Observable<ITransaction[]>{
    console.log(JSON.stringify(account));
    return this.http.put<ITransaction[]>(this.url + "/transactions", JSON.stringify(account), httpOptions);
  }
}
