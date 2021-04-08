import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { UserDetailComponent } from './users/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: "", component: HomeComponent},
      {path: "users", loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
      {path: "users/:id", component: UserDetailComponent},

    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  

}
