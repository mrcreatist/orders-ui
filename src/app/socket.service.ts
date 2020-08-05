import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import * as socketIO from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  menu: any = [];
  socket: any;

  private orderSocketEvent = new BehaviorSubject(null);

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  getOrderSocketEvent(): Observable<any> {
    return this.orderSocketEvent;
  }

  getActiveOrders() {
    this.socket.emit('get-orders');
  }

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

  completeOrder(user: any) {
    this.socket.emit('order-complete', { user_id: user });
  }

  openSocketConnection() {
    this.socket = socketIO(`${environment.socketURL}`);
    this.socket.on('all-orders', (data: any) => this.orderSocketEvent.next(data));
  }
}
