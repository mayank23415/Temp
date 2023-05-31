import { Injectable } from '@angular/core';
import { RegisterComponent } from './register.component';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';


@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard {
  constructor(private register: RegisterComponent) {

  }
  
  canDeactivate() {
    return this.register.canExit();
  }
}
