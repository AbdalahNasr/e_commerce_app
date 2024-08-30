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
// export class ClientLoginPageComponent {

//   loginData: LoginModel = {
//     id: '',
//     email: '',
//     password: '',
//     rememberMe: false
//   };

//   constructor(private authService: AuthService , private router:Router) {}


// // isLoginMode: boolean = true;
//   isLoading: boolean = false ; 
// //   errorMessage: string | null = null;
// //   userModel = new User('','',false)

//   onFormSubmitted(){
// console.log(    this.loginData
// );
// this.isLoading = true;
//     this.authService.login(this.loginData).subscribe({
//       next: (response) => {
//         console.log('Login successful:', response);
        
//         this.router.navigate(['/home']);
//         this.isLoading = false;
//       },
//       error: (error) => {
//         this.isLoading = false;

//         console.error('Login failed:', error); 

//         return error
//       }
//     });

//   }

// }


export class ClientLoginPageComponent {

  loginData: LoginModel = {
    id: '',
    email: '',
    password: '',
    rememberMe: false
  };

  isLoading: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onFormSubmitted() {
    console.log(this.loginData);
    this.isLoading = true;

    this.authService.login(this.loginData).subscribe({
      next: (response) => {
        if (response.success) {
          console.log('Login successful:', response);
          this.router.navigate(['/home']);
        } else {
          console.error('Login failed:', response.message);
          // Optionally, show an error message to the user
        }
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Login failed:', error);
      }
    });
  }
}