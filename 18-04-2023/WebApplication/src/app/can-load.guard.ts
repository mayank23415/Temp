import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanLoadGuard {
  canLoad() {
    return true;
  }
}
