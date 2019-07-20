import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  get user() {
    return localStorage.getItem('user');
  }
  set user(user: string) {
    localStorage.setItem('user', user);
  }

  get notLoggedIn(){
    return this.user == null || this.user.length < 4;
  }

  constructor() {
  }
}
