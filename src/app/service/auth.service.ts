import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LoginModel } from '../models/login-model';
import { RegisterationModel } from '../models/registeration-model';

@Injectable({
  providedIn: 'root'
})
// export class AuthService {
//    // Replace with your API endpoint
//   private apiUrl = 'assets/loginModel.json';

//   constructor(private http: HttpClient) {}

//   // login(status: LoginModel): Observable<any> {
//   //   console.log(status);
    
//   //   return this.http.post<any>(this.apiUrl, status);
//   // }
//   // register(status: LoginModel): Observable<any> {
//   //   console.log(status);
    
//   //   return this.http.post<any>(this.apiUrl, status);
//   // }
//   // login(status: LoginModel): Observable<any> {
//   //   console.log(status);
//   //   this.saveLoginToLocalStorage(status); // Save login data to local storage
//   //   return this.http.post<any>(this.apiUrl, status);
//   // }

//   // register(status: RegisterationModel): Observable<any> {
//   //   console.log(status);
//   //   this.saveRegisterToLocalStorage(status); // Save registration data to local storage
//   //   return this.http.post<any>(this.apiUrl, status);
//   // }

//   // private saveLoginToLocalStorage(status: LoginModel): void {
//   //   // Save login status to local storage
//   //   localStorage.setItem('loginstatus', JSON.stringify(status));
//   // }

//   // private saveRegisterToLocalStorage(status: RegisterationModel): void {
//   //   // Save registration status to local storage
//   //   localStorage.setItem('registerstatus', JSON.stringify(status));
//   // }



//   // login(status: LoginModel): Observable<any> {
//   //   console.log(status);

//   //   // Get the stored registration data from local storage
//   //   const storedstatus = this.getStoredRegisterstatus();

//   //   if (
//   //     storedstatus &&
//   //     status.email === storedstatus.email &&
//   //     status.password === storedstatus.password
//   //   ) {
//   //     // If status match, simulate successful login
//   //     return of({ success: true, message: 'Login successful' });
//   //   } else {
//   //     // If status do not match, return an error
//   //     return of({ success: false, message: 'Invalid status' });
//   //   }
//   // }

//   // register(status: RegisterationModel): Observable<any> {
//   //   console.log(status);
//   //   this.saveRegisterToLocalStorage(status); // Save registration data to local storage
//   //   return this.http.post<any>(this.apiUrl, status);
//   // }

//   // private saveRegisterToLocalStorage(status: RegisterationModel): void {
//   //   // Save registration status to local storage
//   //   localStorage.setItem('registerstatus', JSON.stringify(status));
//   // }

//   // private getStoredRegisterstatus(): RegisterationModel | null {
//   //   const storedstatus = localStorage.getItem('registerstatus');
//   //   return storedstatus ? JSON.parse(storedstatus) : null;
//   // }


//   login(status: LoginModel): Observable<any> {
//     console.log(status);

//     // Get the stored registration data from local storage
//     const storedstatus = this.getStoredRegisterstatus();

//     if (
//       storedstatus &&
//       status.email === storedstatus.email &&
//       status.password === storedstatus.password
//     ) {
//       // If status match, simulate successful login
//       return of({ success: true, message: 'Login successful' });
//     } else {
//       // If status do not match, return an error
//       return of({ success: false, message: 'Invalid email or password' });
//     }
//   }

//   register(status: RegisterationModel): Observable<any> {
//     console.log(status);
//     this.saveRegisterToLocalStorage(status); // Save registration data to local storage
//     return this.http.post<any>(this.apiUrl, status);
//   }

//   private saveRegisterToLocalStorage(status: RegisterationModel): void {
//     // Save registration status to local storage
//     localStorage.setItem('registerstatus', JSON.stringify(status));
//   }

//   private getStoredRegisterstatus(): RegisterationModel | null {
//     const storedstatus = localStorage.getItem('registerstatus');
//     return storedstatus ? JSON.parse(storedstatus) : null;
//   }
// }

export class AuthService {
  private apiUrl = 'assets/loginModel.json';

  constructor(private http: HttpClient) {}

  register(status: any): Observable<any> {
    console.log(status);
    localStorage.setItem('registeredUser', JSON.stringify(status)); 
    return this.http.post<any>(this.apiUrl, status);
  }

  login(status: any): Observable<any> {
    const storedUser = JSON.parse(localStorage.getItem('registeredUser') || '{}');

    if (status.email === storedUser.email && status.password == storedUser.password) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('loggedInUser', JSON.stringify(status));
      return of({ success: true  }); 
    }

    return of({ success: false, message: 'Invalid status' }); // Simulate a failed login response
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loggedInUser');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') == 'true';
  }
}
