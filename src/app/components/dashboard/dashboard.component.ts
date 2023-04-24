import {Component, OnInit} from '@angular/core';
import {ICustomer} from "../../models/Customer";
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  loggedInCustomer = {} as ICustomer;

  constructor(
    private _customerService: CustomerService) {
  }


  ngOnInit(): void {
    this.loggedInCustomer = this._customerService.getCurrentCustomer();

  }
}
