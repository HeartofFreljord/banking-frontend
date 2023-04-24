import {Component, OnInit} from '@angular/core';
import {TransactionService} from "../../services/transaction.service";
import {FormBuilder} from "@angular/forms";
import {CustomerService} from "../../services/customer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ITransaction} from "../../models/Transaction";
import {AccountService} from "../../services/account.service";
import {Observable} from "rxjs";
import {IAccount} from "../../models/Account";
import {ICategory} from "../../models/Category";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-add-transaction-page',
  templateUrl: './add-transaction-page.component.html',
  styleUrls: ['./add-transaction-page.component.css']
})
export class AddTransactionPageComponent implements OnInit{
  transactionForm = this.formBuilder.group({
    senderIban: '',
    description: '',
    amount: 0,
  })
  selectedAccount: IAccount = {} as IAccount;
  categoryList: ICategory[] = [];
  selectedCategory: ICategory = {} as ICategory;
  constructor(
    private formBuilder: FormBuilder,
    private transactionService: TransactionService,
    private accountService: AccountService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("id")!;
    this.accountService.getAccountById(id).subscribe( account =>{
      this.selectedAccount = account;
    })
    this.categoryService.getCategories().subscribe(categories =>{
      this.categoryList = categories;
      this.selectedCategory = this.categoryList[8];
    })
  }

  submitTransaction() {
    let transaction: ITransaction = {
      id: 0,
      senderIban: this.transactionForm.value.senderIban!,
      description: this.transactionForm.value.description!,
      amount: this.transactionForm.value.amount!,
      sendDate: new Date(),
      account: this.selectedAccount,
      category: this.selectedCategory
    };
    this.transactionService.createTransaction(transaction).subscribe(value => {
      let result = value;
      if (result) {
        this.router.navigate(['/account', this.selectedAccount.id]);
      } else {
        alert("Please try again");
      }
    });
  }

  onCategoryChange(){
    console.log(this.selectedCategory);
  }

}
