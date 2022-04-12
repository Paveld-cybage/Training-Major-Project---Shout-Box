import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  token: any;
  token_id: any;
  constructor(private route: Router){

  }
  canActivate(){
    this.token = localStorage.getItem('token');
    this.token_id = localStorage.getItem('token_id');
    if (this.token && this.token_id) {
      return true;
    } else {
      this.route.navigate(['login']);
      return false;
    }
  }
}
