import {Component, OnInit} from '@angular/core';
import {TransactionService} from "../../services/transaction.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ITransaction} from "../../models/Transaction";

@Component({
  selector: 'app-transaction-page',
  templateUrl: './transaction-page.component.html',
  styleUrls: ['./transaction-page.component.css']
})
export class TransactionPageComponent implements OnInit{
  selectedTransaction: ITransaction = {} as ITransaction;
  constructor(
    private transactionService: TransactionService,
    public router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("id")!;
    this.transactionService.getTransactionById(id).subscribe(transaction =>{
      this.selectedTransaction = transaction;
    })
  }

}
