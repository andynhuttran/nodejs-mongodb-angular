import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users' ,
  template: `
    <p>Hello User Component</p>
    <ol>
     <li *ngFor="let item of data">
        <a [routerLink]="['/users', item.login.uuid]" [state]="{user: item}">
              {{item.name.first}} {{item.name.last}}
        </a>
     </li>
    </ol>
  `
})
export class UsersComponent implements OnInit {

  public data: Array<object>;

  constructor(private userService: UsersService) { 
    this.data = new Array();
  }

  ngOnInit(): void {
    this.userService.getData().subscribe(
      res => this.handleResponse(res),
      err => this.handleError(err),
    );
  }

  handleResponse(res){
    
    this.data = res;
    // for (let item of res){
    //   let first = item.name.first;
    //   let last = item.name.last;      

    //   this.data.push({first, last});
    // }

    // console.log(this.data);
  }

  handleError(err){
    console.log({err});
  }

  

}
