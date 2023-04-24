import {Component, OnInit} from '@angular/core';
import {ITransaction} from "../../models/Transaction";
import {TransactionService} from "../../services/transaction.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IAccount} from "../../models/Account";
import {AccountService} from "../../services/account.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit{
  selectedAccount: IAccount = {} as IAccount;
  observableAccount: Observable<IAccount> = {} as Observable<IAccount>
  constructor(
    private accountService: AccountService,
    public router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("id")!;
    this.observableAccount = this.accountService.getAccountById(id);
    this.observableAccount.subscribe((value: IAccount) => {
      this.selectedAccount = value;
    })
  }

  makeTransaction() {
    this.router.navigate(['/account', this.selectedAccount.id, 'new-transaction'])
  }
}
