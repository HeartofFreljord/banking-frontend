import {Component, Input, OnInit} from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {IAccount} from "../../models/Account";
import {ITransaction} from "../../models/Transaction";
import {AccountService} from "../../services/account.service";
import {TransactionService} from "../../services/transaction.service";

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit{
  @Input() selectedAccount: IAccount = {} as IAccount;
  transactions: ITransaction[] = [];

  constructor(
    private transactionService: TransactionService
  ) {
  }

  ngOnInit(): void {
    console.log(this.selectedAccount.iban);
    this.transactionService.getTransactionByAccount(this.selectedAccount).subscribe(value => {
      this.transactions = value;
    });
  }
}
