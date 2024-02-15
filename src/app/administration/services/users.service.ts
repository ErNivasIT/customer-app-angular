import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiBaseUrl!:"http://localhost/CustomersAPI/api"
  constructor(private httpClient: HttpClient) { }
  addUser(request: any): Observable<any> {
    return this.httpClient.post<any>("https://localhost:7093/api/Auth/add-user", request);
  }
}
