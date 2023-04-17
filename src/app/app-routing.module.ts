import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {TransactionListComponent} from "./components/transaction-list/transaction-list.component";
import {AccountPageComponent} from "./components/account-page/account-page.component";

const routes: Routes = [
  { path: 'login', component: LoginPageComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'account/:id', component: AccountPageComponent},

  { path: '', redirectTo: '/dashboard', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
