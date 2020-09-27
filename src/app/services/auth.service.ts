import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3000/api/auth'

  token: string

  constructor(
    private http: HttpClient
  ) { }

  signIn = (data: any) => {
    console.log('dataSignIn', data)
    // const url = `${this.baseUrl}/signin`
    // return this.http.post(url, data)
  }
  
  signUp = (data: any) => {
    console.log('dataSignUp', data)
    // const url = `${this.baseUrl}/signup`
    // return this.http.post(url, data)
  }

}
