import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>Hello Angular</p>

    <server grade="4"></server>
  `,
  encapsulation: ViewEncapsulation.ShadowDom
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  stuGrade = 3;
}
