import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { UsersService } from './users.service';
import { UserDetailComponent } from './user-detail.component';

@NgModule({
  declarations: [
    UsersComponent,
    UserDetailComponent
  ],
  imports: [    
    CommonModule,
    HttpClientModule,

    RouterModule.forChild([
      {path: '', component: UsersComponent}
    ])
    
  ],
  providers: [UsersService],
  bootstrap: [UsersComponent]
})
export class UsersModule { }
