import {Component, OnInit} from '@angular/core';
import {IAccount} from "../../models/Account";
import {ICategory} from "../../models/Category";
import {AccountService} from "../../services/account.service";
import {CategoryService} from "../../services/category.service";
import {TransactionService} from "../../services/transaction.service";
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-c02-page',
  templateUrl: './c02-page.component.html',
  styleUrls: ['./c02-page.component.css']
})
export class C02PageComponent implements OnInit{
  accountList: IAccount[] = [];
  selectedAccount: IAccount = {} as IAccount;
  categoryList: ICategory[] = [];
  valuePerCategory: number[] = [];
  constructor(
    private accountService: AccountService,
    private categoryService: CategoryService,
    private transactionService: TransactionService,
    private customerService: CustomerService
  ) {
  }
  ngOnInit() {
    this.accountService.getAccountsByCustomer(this.customerService.getCurrentCustomer()).subscribe(accounts=>{
      this.accountList = accounts;
      this.selectedAccount = this.accountList[0];
      this.categoryService.getCategories().subscribe(categories=>{
        this.categoryList = categories;
        this.calculateValuePerCategory();
      })
    })
  }

  calculateValuePerCategory() {
    for (let category = 0; category < this.categoryList.length; category++) {
      this.valuePerCategory[category] = 0;
      this.transactionService.getTransactionByAccountIdAndCategoryId(this.selectedAccount.id, category+1).subscribe(transactions=>{
        for (let transaction = 0; transaction < transactions.length; transaction++) {
          this.valuePerCategory[category]+=transactions[transaction].amount*this.categoryList[category].co2MultiplierInKg;
        }
      })
    }
  }
}
