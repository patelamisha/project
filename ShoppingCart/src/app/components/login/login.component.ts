import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  constructor(private api: ApiService, private customer: CustomerService, private router: Router) { }
  tryLogin() {
    this.api.login(
      this.email,
      this.password
    )
      .subscribe(
        r => {
          if (r.token) {
            this.customer.setToken(r.token);
            this.router.navigateByUrl('/body-page');
          }
        },
        r => {
          alert(r.error.error);
        });
  }
  ngOnInit() {
  }

}
