import { Component, OnInit } from '@angular/core';
import { AuthenService } from './authen.service';

@Component({
  selector: 'app-home',
  template: `
    <h1>Home Component</h1>
    <p *ngIf='authenService.isLogin()'>Hello </p>

  `
})
export class HomeComponent implements OnInit {

  constructor(private authenService: AuthenService) { }

  ngOnInit(): void {

  }

}
