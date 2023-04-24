import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ITransaction} from "../models/Transaction";
import {ICategory} from "../models/Category";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url: string = "http://localhost:8080";

  constructor(private http: HttpClient) {
  }

  getCategories() {
    return this.http.get<ICategory[]>(this.url + "/categories", httpOptions);
  }
}
