import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponse } from "../models/auth-response";
import { Router } from '@angular/router';
import { User } from '../signin/user';
import { LoginModel } from '../models/login-model';
import { AuthService } from '../service/auth.service';
import { LoginResponse } from '../models/login-response';
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


// export class ClientLoginPageComponent {
// userId: any = ''
//   loginData: LoginModel = {
    
//     // id: '',
//     Email: '',
//     Password: ''
//     // rememberMe: false
//   };

//   isLoading: boolean = false;

//   constructor(private authService: AuthService, private router: Router) {}

//   onFormSubmitted() {
//     debugger
//     console.log(this.loginData);
//     // this.isLoading = true;

//     this.authService.login(this.loginData).subscribe({
//       next:(response : LoginResponse) => {
//         debugger
//         console.log(response);
        
//         if (response.message == '200') {
//           console.log('Login successful:', response);

//           localStorage.setItem('userId', response.id);
//           localStorage.setItem('isAdmin', JSON.stringify(response.isAdmin));
//           localStorage.setItem('createdOn', response.createdOn);
//           localStorage.setItem('updatedOn', response.updatedOn);
//           localStorage.setItem('isDeleted', JSON.stringify(response.isDeleted));
// this.userId = response.id

// console.log(this.userId);

//           this.router.navigate(['/']);  

//         } else {
//           console.error('Login failed:', response.message);
//           // Optionally, show an error message to the user
//         }
//         this.isLoading = false;
//       },
      
//       error : (error) => {
//         this.isLoading = false;
//         console.error('Login failed:', error);
//       }
//   });
//   }
// } 

export class ClientLoginPageComponent {
  userId: string = '';
  loginData: LoginModel = {
    Email: '',
    Password: ''
  };

  isLoading: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onFormSubmitted() {
    console.log(this.loginData);
    this.isLoading = true;

    this.authService.login(this.loginData).subscribe({
      next: (response: LoginResponse) => {
        console.log(response);

        // Check for the correct success message or status
        if (response.message == "Login Successfully") {
          console.log('Login successful:', response);

          // Store user data in local storage
          localStorage.setItem('userId', response.data.id);
          console.log(response.data.id);
          
          localStorage.setItem('isAdmin', JSON.stringify(response.data.isAdmin));
          localStorage.setItem('createdOn', response.data.createdOn);
          localStorage.setItem('updatedOn', response.data.updatedOn);
          localStorage.setItem('isDeleted', JSON.stringify(response.data.isDeleted));

          this.userId = response.data.id;
          console.log(this.userId);

          this.router.navigate(['/']);
        } else {
          console.error('Login failed:', response.message);
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