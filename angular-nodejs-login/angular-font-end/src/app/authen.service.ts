import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  jwt: string;
  login: boolean;
  constructor() {
    this.jwt = "";
    this.login = false;
  }

  setToken(value){
    this.jwt = value;
    this.login = true;
  }

  isLogin(){
    return this.login;
  }



}
