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
  currentTransaction: Observable<ITransaction> = {} as Observable<ITransaction>;
  url: string = "http://localhost:8080";

  constructor(private http: HttpClient) {
  }

  public getTransactionByAccount(account: IAccount): Observable<ITransaction[]>{
    return this.http.put<ITransaction[]>(this.url + "/transactions/account", JSON.stringify(account), httpOptions);
  }

  public getTransactionByAccountIdAndCategoryId(account: number, category: number): Observable<ITransaction[]>{
    let param: string = "?accountId=" + account + "&categoryId=" + category;
    return this.http.put<ITransaction[]>(this.url + "/transactions/category" + param, httpOptions);
  }

  public getTransactionById(id: number): Observable<ITransaction>{
    this.currentTransaction = this.http.get<ITransaction>(this.url + "/transaction/" + id);
    return this.currentTransaction;
  }

  public createTransaction(transaction: ITransaction): Observable<ITransaction>{
    return this.http.post<ITransaction>(this.url + "/transactions", JSON.stringify(transaction), httpOptions);
  }
}
