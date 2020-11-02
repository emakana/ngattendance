import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticateService } from '../authenticate.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = new User();
  msg = '';

  constructor(private _service: AuthenticateService, private _router: Router) {}

  ngOnInit(): void {}

  loginUser() {
    this._service.loginUserFromRemote(this.user).subscribe(
      (data) => {
        console.log('response received');
        this._router.navigate(['/loginsuccess']);
      },
      (error) => {
        console.log('exception occurred');
        this.msg = 'bad credentials, please enter valid email and password';
      }
    );
  }

  gotoregistration() {
    this._router.navigate(['/registration']);
  }
}
