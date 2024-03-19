import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userName: string = '';

  constructor(private route: Router) {}

  login() {
    sessionStorage.setItem('user', this.userName);
    this.route.navigate(['home']);
  }
}
