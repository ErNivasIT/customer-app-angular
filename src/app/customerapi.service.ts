import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customerviewmodel } from './models/customerviewmodel';

@Injectable({
  providedIn: 'root'
})
export class CustomerapiService {

  constructor(private httpClient: HttpClient) { }
  getWeatherforecast(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get("http://localhost/CustomersAPI/weatherforecast",{headers});
  }
  getCustomers(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get("http://localhost/CustomersAPI/api/Customers/getCustomers",{headers});
  }
  addCustomer(customerForAdd:customerviewmodel): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.post("http://localhost/CustomersAPI/api/Customers/addCustomers",customerForAdd,{headers});
  }
}
