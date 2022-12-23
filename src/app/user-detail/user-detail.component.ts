import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../token-storage.service';
import { UserDetail } from '../user-detail';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private tokenService: TokenStorageService,private userService:UserService) { }

    user: UserDetail | undefined
    // user!: {email: string, username: string};
    // userInfo!: UserDetail;
   
  // user!: {email: string, username: string};
  // userInfo!: UserDetail;
  ngOnInit(): void {
    // this.user =  this.tokenService.getUser();
    this.userService.getUserInfo().subscribe(res => {
      this.user = res;
    });
  }

}
