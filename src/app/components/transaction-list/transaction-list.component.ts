import {Component, Input, OnInit} from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {IAccount} from "../../models/Account";
import {ITransaction} from "../../models/Transaction";
import {AccountService} from "../../services/account.service";
import {TransactionService} from "../../services/transaction.service";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit{
  @Input() observableAccount: Observable<IAccount> = {} as Observable<IAccount>;
  selectedAccount: IAccount = {} as IAccount;
  transactions: ITransaction[] = [];
  url = "";

  constructor(
    private transactionService: TransactionService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.observableAccount.subscribe(account => {
      this.selectedAccount = account;
      this.transactionService.getTransactionByAccount(this.selectedAccount).subscribe(value => {
        this.transactions = value.reverse();
      });
    });
  }

  selectTransaction(transaction: ITransaction){
    this.router.navigate(['transaction', transaction.id])
  }
}
