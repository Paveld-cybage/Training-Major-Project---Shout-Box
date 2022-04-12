import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-showfriends',
  templateUrl: './showfriends.component.html',
  styleUrls: ['./showfriends.component.scss']
})
export class ShowfriendsComponent implements OnInit {

  friendList: any
  token_id: any;
  userId: any;

  constructor(
    private service: DataService,
    private route: Router
  ) { }

  ngOnInit() {
    this.token_id = localStorage.getItem('token_id');
    this.userId = this.token_id;
    this.showFriends();
  }

  showFriends() {
    this.service.getFriendList(this.userId).subscribe(res => {
      console.log(res);
      this.friendList = res;
    });
  }
}
