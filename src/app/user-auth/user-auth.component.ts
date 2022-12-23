import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router
    ) { }

     failed:boolean = false;

   isLogged(){
     return this.tokenStorage.getToken() != "" && this.tokenStorage.getToken() != null ; 
   }
  ngOnInit(): void {
    this.failed = false;
    if(this.isLogged()){
      this.router.navigateByUrl("/home");
    }
  }

  form: FormGroup = new FormGroup({
    login: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(25),
      
    ]
      ),
    password: new FormControl('',[
    Validators.required,
    Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")

    ])
  });

  login() {
    const val = this.form.value;
    if (val.login && val.password) {
      this.authService.login({username: val.login, password: val.password}).subscribe(
        (res) => {
          this.tokenStorage.saveToken(res.token);
          let user = {
            email: res.email,
            username: res.username,
            roles: res.roles,
            id: res.id
          }
          this.tokenStorage.saveUser(user);
          this.router.navigateByUrl("/home");
        },
        err => {
          this.failed = true;
        }
      )
    }
  }

}
