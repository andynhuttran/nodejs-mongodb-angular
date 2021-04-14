import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>App Component</h2>

    <a [routerLink]="['/']">Home</a>
    <a [routerLink]="['/signup']">Sign up</a>
    <a [routerLink]="['/signin']">Sign in</a>

    <hr>
    <router-outlet></router-outlet>

  `  
})
export class AppComponent {

}
