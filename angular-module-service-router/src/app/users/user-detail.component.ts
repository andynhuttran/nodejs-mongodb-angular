import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'user-detail',
  template: `
    <p>User Detail Component</p>

    <ol>
        <li>Name: {{user.name.first}} {{user.name.last}}</li>
        <li>Email: {{user.email}}</li>
        <li>Sex: {{user.gender}}</li>
        <li>Phone: {{user.phone}}</li>    
    </ol>

    <img src='{{user.picture.medium}}'/>
  `
})
export class UserDetailComponent implements OnDestroy {

  user: any;

  constructor(private router: Router) {
    //console.log(this.router.getCurrentNavigation());
    this.user = this.router.getCurrentNavigation().extras.state.user;
    console.log(this.user);
  }

  ngOnDestroy() {

  }

}
