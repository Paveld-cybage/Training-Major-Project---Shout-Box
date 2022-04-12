import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { elementAt } from 'rxjs';
import { DataService } from '../data.service';
import { Request } from '../models/request.model';

@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.scss']
})
export class ShowuserComponent implements OnInit {

  data: any
  token_id: any;
  userId: any;
  receiver: any;
  check: any;
  request = new Request;
  reqData: any;

  constructor(
    private service: DataService, 
    private route: Router,
    private toast: NgToastService
    ) { }

  ngOnInit(): void {
    this.token_id = localStorage.getItem('token_id');
    this.userId = this.token_id;
    this.getUserData();
  }
  
  getUserData() {
    this.service.getData().subscribe((res:any) => {
      const temp = res.filter((i:any) => {
        return i.approved === 1
      });
      this.data = temp;
      console.log(this.data);
      this.data.forEach((element: any, index: number) => {
        if (this.userId == element.id){
           this.data.splice(index,1);
        }
      });
    });
  }

  addFriend($following_id: any) {
    this.request.receiver = $following_id;
    this.request.sender = this.userId;
    this.toast.success({ detail:"Request sent Successful",duration:2000});
    this.service.sendRequest(this.request).subscribe(res => {
      this.reqData = res;
      this.data.forEach((element: any, index: number) => {
        console.log($following_id, element.id);
        if ($following_id == element.id){
           this.data.splice(index,1);
        }
      });
      console.log(this.reqData);

    });

  }
}




