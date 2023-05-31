import { Injectable } from '@angular/core'
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouteGuardGuard } from '../route-guard.guard';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class LoginComponent {
  constructor(private routeGaurd: RouteGuardGuard, private router: Router, private service: UserService) {

  }
  id: String;
  password: String;
  token: String;


  async login() {
    this.service.login(this.id, this.password).subscribe((response) => {
      this.token = response as String;
      console.log(this.token);
      localStorage.setItem(<string>this.id, <string>this.token);
      this.routeGaurd.logIn();
    });
  }

  navRegister() {
    this.router.navigate(['register']);
  }

  getUser(){
    return <string>this.id;
  }
}
