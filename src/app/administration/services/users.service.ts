import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiBaseUrl="http://localhost/CustomersAPI/api";
  constructor(private httpClient: HttpClient) { }
  addUser(request: any): Observable<any> {
    return this.httpClient.post<any>(this.apiBaseUrl+"/Auth/add-user", request);
  }
  getAllUsers(): Observable<any> {
    return this.httpClient.get<any>(this.apiBaseUrl+"/Auth/all-users");
  }
}
