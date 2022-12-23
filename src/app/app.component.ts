import { Component } from '@angular/core';
import { TokenStorageService } from './token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'GymHelper';
      
  constructor(private tokenStorageService: TokenStorageService){}
  isLogged(){
    return this.tokenStorageService.getToken() != "" && this.tokenStorageService.getToken() != null ; 
  }

logout(){
  this.tokenStorageService.signOut();
}
register(){
  
}


}
