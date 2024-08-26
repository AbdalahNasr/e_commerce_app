import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponse } from "../models/auth-response";
import { Router } from '@angular/router';
import { User } from '../signin/user';
import { LoginModel } from '../models/login-model';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-client-login-page',
  templateUrl: './client-login-page.component.html',
  styleUrls: ['./client-login-page.component.scss']
})
export class ClientLoginPageComponent {

  loginData: LoginModel = {
    email: '',
    password: '',
    rememberMe: false
  };

  constructor(private authService: AuthService) {}

// isLoginMode: boolean = true;
  isLoading: boolean = false;
//   errorMessage: string | null = null;
//   userModel = new User('','',false)

  onFormSubmitted(){
console.log(    this.loginData
);

    this.authService.login(this.loginData).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
      },
      error: (error) => {
        console.error('Login failed:', error);
      }
    });

  }

}
