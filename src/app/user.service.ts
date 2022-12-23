import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetail } from './user-detail';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  userUrl='http://localhost:8079/api/users';
  constructor(private http: HttpClient) { }
  
    getUserInfo() {
      return this.http.get<UserDetail>(`${this.userUrl}/me/info`);
    }
  
}
    