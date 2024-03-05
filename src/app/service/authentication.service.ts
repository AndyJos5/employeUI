import { Injectable } from '@angular/core';
import { API_URL, AuthenticationResponse, TOKEN_KEY } from './util.service';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  isAuthenticated(){
    const token = sessionStorage.getItem(TOKEN_KEY)
    if (token) {
      return true
    }else
    return false
  }
  login(user:User){
    var url = API_URL.concat('login')
    return this.http.post<AuthenticationResponse>(url,user)
  }

  register(user:User){
    var url = API_URL.concat('register')
    return this.http.post<AuthenticationResponse>(url,user)
  }
}
