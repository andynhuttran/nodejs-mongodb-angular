import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class UsersService {  

  url: string = "https://randomuser.me/api/?results=10";
  constructor(private http: HttpClient){

  }

  getData() {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    return this.http.get(this.url)
      .pipe(map((res: any) => res.results));
  }

}
