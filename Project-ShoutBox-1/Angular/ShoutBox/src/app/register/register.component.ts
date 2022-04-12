import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  registerForm: any;
  data: any;
  status: any;
  message: any;
  part: any;
  
  register = new FormGroup({
    'name': new FormControl(null, Validators.required),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(
      null,
      [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$')
      ]
    ),
  });

  constructor(
    private router: Router,
    private dataService: DataService,
    private toast: NgToastService
  ) { }

  ngOnInit(): void {
  }

  loginRoute() {
    this.router.navigate(['login']);
  }


  registerSubmited() {

    this.registerForm = JSON.stringify(this.register.value);

    this.dataService.registerUser(this.registerForm).subscribe(res => {
      console.log(res);
      this.data = res;
      this.status = this.data.status;
      this.message = this.data.message;
      if (this.status) {
        this.toast.success({ detail: "Registration Successful", summary: this.message,duration:50000});
      }
      else{
        this.toast.error({ detail:this.message, duration: 50000 });
      }
      if (this.status == 1) {
        setTimeout(() => {
          this.router.navigate(['login'], { queryParams: { 'part': this.part + 1 } })
        }
          , 2000);
      }
    });
    this.register.reset();
  }
}