import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {TransactionListComponent} from "./components/transaction-list/transaction-list.component";
import {AccountPageComponent} from "./components/account-page/account-page.component";
import {AddTransactionPageComponent} from "./components/add-transaction-page/add-transaction-page.component";
import {TransactionPageComponent} from "./components/transaction-page/transaction-page.component";
import {InsightPageComponent} from "./components/insight-page/insight-page.component";
import {C02PageComponent} from "./components/c02-page/c02-page.component";

const routes: Routes = [
  { path: 'login', component: LoginPageComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'account/:id', component: AccountPageComponent},
  { path: 'account/:id/new-transaction', component: AddTransactionPageComponent},
  { path: 'transaction/:id', component: TransactionPageComponent},
  { path: 'insights', component: InsightPageComponent},
  { path: 'c02footprint', component: C02PageComponent},

  { path: '', redirectTo: '/dashboard', pathMatch: "full"},
  { path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
