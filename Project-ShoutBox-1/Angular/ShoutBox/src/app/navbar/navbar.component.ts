import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userName: any;
  userId: any;

  constructor(
    private route: Router,
    private toast: NgToastService
  ) { }

  ngOnInit() {
    this.userName = localStorage.getItem('token');
    this.userId = localStorage.getItem('token_id');
  }

  logout() {
    this.toast.success({ detail: "Logout Successful", summary: this.userName, duration: 5000 });
    localStorage.removeItem('token');
    localStorage.removeItem('token_id');
    this.route.navigate(['login']);
  }
}
