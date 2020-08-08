import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SocketService } from '../socket.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { OrderPlacedComponent } from './order-placed/order-placed.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu: any = [];
  item = new FormControl();
  quantity = new FormControl();
  filteredOptions: Observable<string[]>;
  counter: number = 0;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private socket: SocketService
  ) {
  }

  ngOnInit(): void {
    if (!this.socket.isUser()) {
      this.router.navigateByUrl('register');
    } else {
      this.menu = JSON.parse(localStorage.getItem('menu'));
    }

    this.filteredOptions = this.item.valueChanges.pipe(startWith(''), map(value => this.menu.length ? this._filter(value) : null));
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.menu.filter((option: any) => option.item.toLowerCase().includes(filterValue));
  }

  order() {
    this.socket.placeOrder({
      item: this.menu.filter((x: any) => x.item.toLowerCase() === this.item.value.toLowerCase())[0].id,
      quantity: parseInt(this.quantity.value),
      user_id: JSON.parse(localStorage.getItem('user')).id,
    }).subscribe((res: any) => {
      if (res.message === 'order placed') {
        this.dialog.open(OrderPlacedComponent);
      }
    });
  }

  goToBoard() {
    this.counter++;
    if (this.counter >= 5) {
      this.router.navigateByUrl('/board');
    }
  }

}
