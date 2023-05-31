import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouteGuardGuard } from './route-guard.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebApplication';
  constructor(private router : Router, private _auth: RouteGuardGuard) {

  }

  logout() {
    this._auth.logOut();
    this.router.navigate(['login']);
  }
}
