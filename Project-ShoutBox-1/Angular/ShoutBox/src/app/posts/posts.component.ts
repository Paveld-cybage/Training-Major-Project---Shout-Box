import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;
  post = new Post();

  token: any;
  //getting the user token Id
  token_id: any;

  //declaring the user Id
  username: any;
  user: any;

  constructor(private dataService: DataService) {
    this.getPostData();
  }

  ngOnInit() {
    this.token = localStorage.getItem('token');
    //assigning the token id
    this.token_id = localStorage.getItem('token_id');
    //declaring the value of post.user_id with the token_id in the localstorage
    this.post.user_id = this.token_id;
    //assigning value of friendsId with Following_id from connections table
  }
  getPostData() {
    this.dataService.getPostData().subscribe(res => {
      this.posts = res;
      console.log(this.user);
      this.posts.forEach((element: any) => {
        element.name = element.user[0].name;
      });
    });
  }

  insertData() {
    this.dataService.insertData(this.post).subscribe(res => {
      this.getPostData();
    });
  }

  deleteData(id: any) {
    this.dataService.deleteData(id).subscribe(res => {
      this.getPostData();
    })
  }
}
