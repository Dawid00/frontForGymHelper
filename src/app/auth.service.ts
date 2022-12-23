import { of } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRegisterForm } from "./UserRegisterForm";

const AUTH_API = 'http://localhost:8079/api/auth/';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  

  @Injectable({
    providedIn: 'root'
  })

export class AuthService {


   constructor(private http: HttpClient) { }
    

   login(credentials:{username:string,password:string}): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user: UserRegisterForm): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      username: user.username,
      email: user.email,
      password: user.password,
      weight: user.weight,
      height: user.height,
      roles: ["user"]
    }, httpOptions);
  }
}