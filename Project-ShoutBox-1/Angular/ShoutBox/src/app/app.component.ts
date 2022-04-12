import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck{
  title = 'ShoutBox';
  check: any;
  window = window; 
  
  ngDoCheck(){
    this.check = window.location.pathname;
  }
}
