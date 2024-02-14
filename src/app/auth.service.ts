import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userresponse } from './models/userresponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }
  getAuthToken(userCredentials: any): Observable<userresponse> {
    return this.httpClient.post<userresponse>("http://localhost/CustomersAPI/api/Auth", userCredentials);
  }
}
