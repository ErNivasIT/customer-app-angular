import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userresponse } from './models/userresponse';
import jwt_decode, { JwtPayload, jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }
  getAuthToken(userCredentials: any): Observable<userresponse> {
    return this.httpClient.post<userresponse>("http://localhost/CustomersAPI/api/Auth", userCredentials);
  }
  checkLogin(): boolean {
    try {
      const token: string = localStorage.getItem('token') ?? '';
      const decoded = jwtDecode(token)  as JwtPayload;;
      console.log(decoded);
      localStorage.setItem('username', decoded.sub || '');
      if (decoded.exp === undefined) {
        return false;
      }
      const date = new Date(0);
      date.setUTCSeconds(decoded.exp);
      return date.valueOf() >= new Date().valueOf();
    } catch (error) {
      return false;
    }
  }
}
