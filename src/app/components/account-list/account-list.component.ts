import {Component, Input, OnInit} from '@angular/core';
import {ICustomer} from "../../models/Customer";
import {IAccount} from "../../models/Account";
import {AccountService} from "../../services/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit{
  @Input() loggedInCustomer: ICustomer = {} as ICustomer;
  accounts: IAccount[] = [];

  constructor(
    private _accountService: AccountService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this._accountService.getAccountsByCustomer(this.loggedInCustomer).subscribe(value => {
      this.accounts = value;
    });
  }

  selectAccount(account: IAccount) {
    this.router.navigate(['/account', account.id])
  }
}
