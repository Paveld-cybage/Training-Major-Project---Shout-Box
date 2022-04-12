import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Connection } from '../models/connection.model';

@Component({
  selector: 'app-showrequests',
  templateUrl: './showrequests.component.html',
  styleUrls: ['./showrequests.component.scss']
})
export class ShowrequestsComponent implements OnInit {

  connec = new Connection;
  token_id: any;
  userId: any;
  requestList: any;
  req_id: any;
  id: any

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.token_id = localStorage.getItem('token_id');
    this.userId = this.token_id;
    this.getRequests();
  }

  getRequests() {
    this.service.getRequestList(this.userId).subscribe(res => {
      console.log(res);
      this.requestList = res;
    });
  }

  acceptRequest(ck: any) {
    this.connec.follower_id = ck.sender;
    this.connec.following_id = this.userId;
    this.req_id = ck.req_id;
    this.service.addConnection(this.connec).subscribe(res => {

    })
  }

  decline(ck: any) {
    this.id = ck.id;
    this.service.deleteRequest(this.id).subscribe(res => {
      this.service.getRequestList(this.userId).subscribe(res => {
        this.requestList = res;
      });
    })
  }
}
