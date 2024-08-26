import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/login-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://example.com/api/login'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  login(credentials: LoginModel): Observable<any> {
    return this.http.post<any>(this.apiUrl, credentials);
  }
}
