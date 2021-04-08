import { Component } from '@angular/core';

@Component({
  selector: 'app-root' ,
  template: `
    <h1>Links in App Component</h1>
    <a [routerLink]="['/']">Home</a>
    <a [routerLink]="['users']">Users</a>
    <hr>
    <router-outlet></router-outlet>

  `
})
export class AppComponent {
    
}
