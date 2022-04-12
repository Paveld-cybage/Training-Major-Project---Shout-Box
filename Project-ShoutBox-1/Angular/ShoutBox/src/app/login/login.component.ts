import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  data: any;
  status: any;
  message: any;
  token: any;
  token_id: any;
  approve: any;

  login = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required),
  });

  constructor(
    private router: Router,
    private dataService: DataService,
    private toast: NgToastService
  ) { }

  ngOnInit(): void {
  }

  registerRoute() {
    this.router.navigate(['register']);
  }

  loginSubmited() {
    this.loginForm = JSON.stringify(this.login.value);

    this.dataService.loginUser(this.loginForm).subscribe(res => {
      console.log(res)
      this.data = res;
      this.status = this.data.status;
      this.approve = this.data.data.approved;

      if (this.approve == 0) {
        if (this.status == 1) {
          this.toast.info({ detail: "Administrator Approval Pending", summary: "Please check back later.", duration: 10000 });
        }
        else {
          this.message = this.data.message;
          this.toast.error({ detail: "Error Message", summary: this.message, duration: 5000 });
        }
      }
      else {
        if (this.status == 1) {
          this.token = this.data.data.name;
          this.token_id = this.data.data.id;
          localStorage.setItem('token', this.token);
          localStorage.setItem('token_id', this.token_id);
          this.toast.success({ detail: "Login Successful", summary: this.token, duration: 5000 });
          this.router.navigate(['shouts']);
        }
        else {
          this.message = this.data.message;
          this.toast.error({ detail: "Error Message", summary: this.message, duration: 5000 });
        }
      }
    });
    this.login.reset();
  }
}
