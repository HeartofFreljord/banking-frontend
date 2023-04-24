import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {NavigatorComponent} from './components/navigator/navigator.component';
import {AccountListComponent} from './components/account-list/account-list.component';
import {TransactionListComponent} from './components/transaction-list/transaction-list.component';
import { AccountPageComponent } from './components/account-page/account-page.component';

import {AccountService} from "./services/account.service";
import {CustomerService} from "./services/customer.service";
import {TransactionService} from "./services/transaction.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import { AddTransactionPageComponent } from './components/add-transaction-page/add-transaction-page.component';
import { TransactionPageComponent } from './components/transaction-page/transaction-page.component';
import { InsightPageComponent } from './components/insight-page/insight-page.component';
import { C02PageComponent } from './components/c02-page/c02-page.component';
import {MatSelectModule} from "@angular/material/select";
import {MAT_FORM_FIELD, MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardComponent,
    NavigatorComponent,
    AccountListComponent,
    TransactionListComponent,
    AccountPageComponent,
    AddTransactionPageComponent,
    TransactionPageComponent,
    InsightPageComponent,
    C02PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatSelectModule,
    FormsModule,
    MatInputModule
  ],
  providers: [
    CustomerService,
    AccountService,
    TransactionService,
    {provide:MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: "outline"}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
