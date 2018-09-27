import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  data: any;

  constructor(private route: Router, private service: AuthService) {}

  ngOnInit() {
    this.service
      .getDados('dados')
      .subscribe(data => {
        this.data = data.json();
      });
  }

  backToWelcome() {
    this.route.navigateByUrl('login');
  }

  logout() {
      localStorage.clear();
      setTimeout(() => this.backToWelcome(), 1000);
 }
}
