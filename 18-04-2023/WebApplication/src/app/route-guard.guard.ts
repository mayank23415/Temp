import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Data, Router } from '@angular/router';
import { UserService } from './services/user.service';
import { User } from './services/user.model';


@Injectable({
  providedIn: 'root'
})
export class RouteGuardGuard{
  loggedIn = false;
  constructor(private router: Router, private service: UserService) {

  }
  user: User;
  logIn() {
    const key = localStorage.key(0);
    const token = localStorage.getItem(key);
    if(token != '') {
      this.loggedIn = true;
      this.service.userInfo(token, key).subscribe((val)=> {
        this.user = val as User;
        localStorage.setItem(key, JSON.stringify(this.user));
      });
      this.router.navigate(['home']);
    }
  }

  logOut() {
    localStorage.clear();
    this.loggedIn = false;
  }
  
  register() {
    console.log('Register Called');
    this.loggedIn = true;
    this.router.navigate(['login']);
  }
  canActivate(route: ActivatedRouteSnapshot){
    console.log('CanActivate Called');
    const key = localStorage.key(0);
    const obj = JSON.parse(localStorage.getItem(key));
    console.log(this.loggedIn);
    const data:Data = route.data;
    const flag = data['role'].includes(obj.role);
    if(flag == false) {
      alert('Access Denied')
      return false;
    }
      
    return this.loggedIn;
  }
}
