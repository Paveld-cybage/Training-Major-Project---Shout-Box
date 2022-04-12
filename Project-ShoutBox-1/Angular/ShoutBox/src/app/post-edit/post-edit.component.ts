import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../models/post';
import { DataService } from 'src/app/data.service';
import { Location } from '@angular/common';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  id:any;
  data:any;
  post = new Post();

  constructor(private _location: Location,
     private route:ActivatedRoute, 
     private dataService: DataService,
     private router: Router,
     private toast: NgToastService
     ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }

  getData() {
    this.dataService.getDataId(this.id).subscribe(res => {
      this.data = res;
      this.post = this.data;
    })
  }

  updatePost() {
    this.dataService.updateData(this.id,this.post).subscribe(res => {
      this.getData();
      this.toast.success({ detail: "Shout Updated", duration: 2000 });
      this.router.navigate(['shouts']);
    })
  }
   
  backClicked() {
    this._location.back();
  }
}
