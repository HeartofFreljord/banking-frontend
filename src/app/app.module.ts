import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {ReactiveFormsModule} from "@angular/forms";
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

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardComponent,
    NavigatorComponent,
    AccountListComponent,
    TransactionListComponent,
    AccountPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    HttpClientModule
  ],
  providers: [
    CustomerService,
    AccountService,
    TransactionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
