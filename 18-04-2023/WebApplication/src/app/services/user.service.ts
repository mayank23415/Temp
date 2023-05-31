import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  login(id: String, pwd: String) {
    if (typeof id === 'undefined' || typeof pwd === 'undefined') {
      window.alert('Please Enter Valid Credentials');
      return null;
    } else {
      id = JSON.stringify(id);
      pwd = JSON.stringify(pwd);
      console.log(id + " " + pwd);
      return this.http.get(this.baseURL + '/login' + `/${id}` + `/${pwd}`)
    }
  }

  register(user: User) {
    console.log('register called');
    return this.http.post(this.baseURL + '/register', user);
  }

  userInfo(token: string, id: string) {
    if (typeof id === 'undefined' || typeof token === 'undefined') {
      return null;
    } else {
      id = JSON.stringify(id);
      token = JSON.stringify(token);
      return this.http.get(this.baseURL + '/getInfo' + `/${token}` + `/${id}`)
    }
  }
}


