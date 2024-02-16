import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customerviewmodel } from './models/customerviewmodel';

@Injectable({
  providedIn: 'root'
})
export class CustomerapiService {
  apiBaseUrl="http://localhost/CustomersAPI"
  constructor(private httpClient: HttpClient) { }
  getWeatherforecast(): Observable<any> {
    return this.httpClient.get(this.apiBaseUrl+"/weatherforecast");
  }
  getCustomers(): Observable<any> {
    return this.httpClient.get(this.apiBaseUrl+"/api/Customers/getCustomers");
  } 
  getCustomerById(id:number): Observable<any> {
    return this.httpClient.get(this.apiBaseUrl+"/api/Customers/getCustomerById/"+id);
  }
  addCustomer(customerForAdd:customerviewmodel): Observable<any> {
    return this.httpClient.post(this.apiBaseUrl+"/api/Customers/addCustomers",customerForAdd);
  } 
  updateCustomer(id:number,customerToUpdate:customerviewmodel): Observable<any> {
    return this.httpClient.put(this.apiBaseUrl+"/api/Customers/updateCustomerById/"+id,customerToUpdate);
  }
  getOrdersByUserName(username:string): Observable<any> {
    return this.httpClient.get(this.apiBaseUrl+"/api/Orders/getOrdersByUserName/"+username);
  }
}
