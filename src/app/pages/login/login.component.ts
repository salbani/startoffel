import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'stfl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  get placeholder() {
    return this.userService.user || 'Name';
  }

  user = '';

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.userService.user = this.user;
    this.router.navigateByUrl('/rate')
  }

}
