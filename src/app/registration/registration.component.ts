import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private registrationService: RegistrationService
  ) {
    this.user = new User();
  }

  onSubmit() {
    this.registrationService
      .save(this.user)
      .subscribe((result) => this.gotoUserLogin());
  }

  gotoUserLogin() {
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {}
}
