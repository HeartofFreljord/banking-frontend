import {Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {CustomerService} from "../../services/customer.service";
import {ICustomer} from "../../models/Customer";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginForm = this.formBuilder.group({
    email: '',
    password: ''
  });
  authenticatedCustomer = {} as ICustomer;

  constructor(
    private formBuilder: FormBuilder,
    private _customerService: CustomerService,
    private router: Router
  ) {
  }

  submitLogin(): void {
    this._customerService.authenticateCustomer(this.loginForm.value.email!, this.loginForm.value.password!).subscribe(value => {
      this.authenticatedCustomer = value;
    });
    if (this.authenticatedCustomer == null) {
      alert("Login failed");
    } else {
      this.loginForm.reset();
      //this.router.navigate(['/dashboard'])
    }
  }
}
