import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { SignupComponent } from './signup.component';
import { SigninComponent } from './signin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: "", component: HomeComponent},
      {path: "signup", component: SignupComponent},
      {path: "signin", component: SigninComponent},

    ])
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
