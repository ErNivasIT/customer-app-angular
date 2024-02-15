import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customerviewmodel } from './models/customerviewmodel';

@Injectable({
  providedIn: 'root'
})
export class CustomerapiService {
  apiBaseUrl="https://localhost:7093"
  constructor(private httpClient: HttpClient) { }
  getWeatherforecast(): Observable<any> {
    //const token = localStorage.getItem('token');
    //const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get(this.apiBaseUrl+"/weatherforecast");
  }
  getCustomers(): Observable<any> {
    //const token = localStorage.getItem('token');
    //const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get(this.apiBaseUrl+"/api/Customers/getCustomers");
  } 
  getCustomerById(id:number): Observable<any> {
    //const token = localStorage.getItem('token');
    //const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get(this.apiBaseUrl+"/api/Customers/getCustomerById/"+id);
  }
  addCustomer(customerForAdd:customerviewmodel): Observable<any> {
    //const token = localStorage.getItem('token');
    //const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.post(this.apiBaseUrl+"/api/Customers/addCustomers",customerForAdd);
  } 
  updateCustomer(id:number,customerToUpdate:customerviewmodel): Observable<any> {
    //const token = localStorage.getItem('token');
    //const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.put(this.apiBaseUrl+"/api/Customers/updateCustomerById/"+id,customerToUpdate);
  }
}
