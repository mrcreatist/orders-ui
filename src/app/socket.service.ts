import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  menu: any = [
    {
      "id": 100,
      "name": "Coffee"
    },
    {
      "id": 101,
      "name": "Tea"
    }
  ];

  constructor(
    private router: Router
  ) { }

  getMenu() {
    return this.menu;
  }

  register(first: string, last: string, code: number) {
    localStorage.setItem('user', JSON.stringify({
      first_name: first,
      last_name: last,
      emp_code: code,
      uuid: '123123'
    }));
  }

  isUser() {
    return localStorage.getItem('user');
  }

  order(item: number, quantity: number) {
    console.log(quantity, item);
  }
}
