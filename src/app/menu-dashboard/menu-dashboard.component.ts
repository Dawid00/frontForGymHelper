import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'menu-dashboard',
  templateUrl: './menu-dashboard.component.html',
  styleUrls: ['./menu-dashboard.component.css']
})
export class MenuDashboardComponent implements OnInit {
  constructor(
    private router: Router,
    private tokenStorageService: TokenStorageService){}
  isLogged(){
    return this.tokenStorageService.getToken() != "" && this.tokenStorageService.getToken() != null ; 
  }
  ngOnInit(): void {
   
    // if(!this.isLogged){
    //   this.router.navigateByUrl("/auth/login");
    // }
  }

}
