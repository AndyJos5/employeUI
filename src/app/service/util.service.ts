import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private http: HttpClient, private router:Router, private snackBar:MatSnackBar) { }
  getRoles() {

    const url = API_URL.concat('getRoles')
    return this.http.get<string[]>(url);
  }
  showMessage(message: string, action: string) {
    
    this.snackBar.open(message, action)
  }

  async handleSignup(response:AuthenticationResponse){
    if (response.token == null) {
      
    }else
    this.router.navigateByUrl('/')
  }

 async handleLogin(response:AuthenticationResponse){
    if (response.token == null) {
      
    }else{
      sessionStorage.setItem(TOKEN_KEY,response.token)
    this.router.navigateByUrl('/')
  }
  }
}
export const TOKEN_KEY = "token"
export const API_URL = "http://localhost:8080/"
export interface AuthenticationResponse {
  message: string,
  token: string
}
