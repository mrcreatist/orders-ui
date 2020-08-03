import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu: any;
  item = new FormControl();
  quantity = new FormControl();
  filteredOptions: Observable<string[]>;

  constructor(
    private router: Router,
    private socket: SocketService
  ) {
    if (!this.socket.isUser()) {
      this.router.navigateByUrl('register');
    } else {
      this.menu = this.socket.getMenu();
    }
  }

  ngOnInit(): void {
    this.filteredOptions = this.item.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.menu.filter((option: any) => option.name.toLowerCase().includes(filterValue));
  }

  order() {
    this.socket.order(this.menu.filter((x: any) => x.name === this.item.value)[0].id, parseInt(this.quantity.value))
  }

}
