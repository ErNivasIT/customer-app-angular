import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
 
  private tokenSubject = new BehaviorSubject<string>('');
  private tokenRefreshSubject = new BehaviorSubject<string>('');

  getToken() {
    return this.tokenSubject.asObservable();
  }
  getRefreshToken() {
    return this.tokenRefreshSubject.asObservable();
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
    this.tokenSubject.next(token);
  }
  setRefreshToken(token: string) {
    localStorage.setItem('refreshtoken', token);
    this.tokenRefreshSubject.next(token);
  }
  clearToken() {
    localStorage.removeItem('token');
    this.tokenSubject.next('');
  }
  clearRefreshToken() {
    localStorage.removeItem('token');
    this.tokenRefreshSubject.next('');
  }
}
