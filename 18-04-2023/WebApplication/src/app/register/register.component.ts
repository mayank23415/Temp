import { Injectable } from '@angular/core'
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../services/user.model';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { RouteGuardGuard } from '../route-guard.guard';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
@Injectable({
  providedIn:'root'
})
export class RegisterComponent {
  reactiveForm: FormGroup;
  firstName;
  lastName;
  email;
  password;
  country;
  gender;

  constructor(private guard: RouteGuardGuard, private service: UserService) {

  }
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required, this.checkSpace]),
      lastName: new FormControl(null, [Validators.required, this.checkSpace]),
      _id: new FormControl(null, [Validators.required, Validators.email, this.checkSpace]),
      age: new FormControl(null, Validators.required),
      role: new FormControl('Admin', Validators.required),
      password: new FormControl(null, Validators.required),
    })
  }

  onSubmit() {
    let obj;
    const user = new User(this.reactiveForm.value);
    this.service.register(user).subscribe();
    this.guard.register();
  }

  //custom validator
  checkSpace(control: FormControl) {
    if (control.value != null && control.value.indexOf(' ') != -1) {
      return { checkSpace: true };
    }
    return null;
  }

  canExit() {
    if (!this.firstName || !this.lastName || !this.password || !this.email || !this.gender || !this.country) {
      return confirm('Do you want to leave the page?');
    } else {
      return true;
    }
  }
}
