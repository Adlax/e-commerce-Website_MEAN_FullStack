import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  email: string;
  firstname: string;
  lastname: string;
  isLoggedIn: boolean = false;

  constructor(private http: HttpClient) { }

  authentification(login,password): Observable<any> {
    let url: string = "http://localhost:8888/auth/login=" + login + "/password=" + password;
    return this.http.get(url);
  }
  
}
