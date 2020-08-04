import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import * as socket from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  menu: any = [];

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  getMenu(): Observable<any> {
    return this.http.get(`${environment.url}/menu`);
  }

  register(first: string, last: string, code: number): Observable<any> {
    return this.http.post(`${environment.url}/add-user`, JSON.stringify({
      first_name: first,
      last_name: last,
      emp_code: code
    }))
  }

  isUser() {
    return localStorage.getItem('user');
  }

  placeOrder(data: any): Observable<any> {
    return this.http.post(`${environment.url}/place-order`, data);
  }

  openSocketConnection() {
    console.log('opening socket connection');
  }

  getActiveOrders() {
    console.log('getActiveOrders()');
  }
}
