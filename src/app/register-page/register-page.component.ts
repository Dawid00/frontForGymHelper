import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { authGuard } from '../auth.guard';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor(private authService: AuthService) { }

  roles = ['user']
  ngOnInit(): void {
    
  }
  form: FormGroup = new FormGroup({
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(25),
    ]
      ),
      email: new FormControl('',[
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
      ]
        ),
        height: new FormControl(160,[
          Validators.required,
          Validators.min(60),
          Validators.max(250)
        
        ]
          ),
          weight: new FormControl(50,[
            Validators.required,
            Validators.min(30),
            Validators.max(200),
          ]
            ),
    password: new FormControl('',[
    Validators.required,
    Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{8,}$")
    ]
      )
  });

  registeredUserInfo = false;
  register(){
    this.authService.register({
      username: this.form.get('username')?.value,
      password: this.form.get('password')?.value,
      weight: this.form.get('weight')?.value,
      height: this.form.get('height')?.value,
      email: this.form.get('email')?.value,
      roles: ["user"]
    })
    .subscribe(res =>{ this.showCreatedInfo();
    this.form.reset()}
    );
  }
  async showCreatedInfo(){
    this.registeredUserInfo = true;
    await new Promise(resolve => setTimeout(resolve, 3000));
    this.registeredUserInfo = false;
   }
}
