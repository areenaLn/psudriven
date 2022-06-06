import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    show = false;
    password = '';
    submitted = false;
    loginForm: FormGroup;
    tokenLogin: string = '';
    headerService: string = '';
    constructor(
      private formBuilder: FormBuilder,
      private router: Router,
    
    ) {
      this.loginForm = this.formBuilder.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
      });
    }
  
    ngOnInit(): void {
      this.password = 'password';
    }
    onLogin() {
      this.submitted = true;
      if (this.loginForm.valid) {
   
       this.router.navigate(['/home']);
      }
    }
    passwordCheck() {
      if (this.password === 'password') {
        this.password = 'text';
        this.show = true;
      } else {
        this.password = 'password';
        this.show = false;
      }
    }
    get sf() {
      return this.loginForm.controls;
    }
}
