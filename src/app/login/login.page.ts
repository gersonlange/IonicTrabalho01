import { AuthGuard } from './../auth.guard';
import { AuthService } from './../service/auth.service';
import { Http, Headers } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userData = {'username': '', 'password': ''};

  constructor(
    private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  doLogin() {
    this.auth.postData(this.userData, 'login')
    .then(data => {
     localStorage.setItem('key', 'conectado');

      this.router.navigate(['home']);
    });
  }
}
