import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewOrderComponent } from './new-order/new-order.component';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: any = [];
  items: any = [];

  constructor(
    public dialog: MatDialog,
    private socket: SocketService
  ) { }

  ngOnInit(): void {
    // this.openDialog();
    this.orders = [
      {
        name: 'Abhishek Verma',
        active: true,
        order_id: '123123',
        data: [
          {
            item: 'Coffee',
            quantity: 10
          },
          {
            item: 'Tea',
            quantity: 11
          }
        ]
      },
      {
        name: 'Simran Verma',
        active: true,
        order_id: '123123',
        data: [
          {
            item: 'Coffee',
            quantity: 10
          },
          {
            item: 'Tea',
            quantity: 11
          }
        ]
      },
      {
        name: 'Pawan Verma',
        active: true,
        order_id: '123123',
        data: [
          {
            item: 'Coffee',
            quantity: 10
          },
          {
            item: 'Tea',
            quantity: 11
          }
        ]
      },
      {
        name: 'Sapna Verma',
        active: true,
        order_id: '123123',
        data: [
          {
            item: 'Coffee',
            quantity: 10
          },
          {
            item: 'Tea',
            quantity: 11
          }
        ]
      }
    ];

    this.activeItems();
  }

  activeItems() {
    this.items = [];
    this.orders.forEach((x: any) => {
      if (x.active) {
        x.data.forEach((y: any) => {
          let itemFind = this.items.filter((i: any) => i.name === y.item)[0];
          if (itemFind) {
            itemFind.quantity += y.quantity;
          } else {
            this.items.push({
              name: y.item,
              quantity: y.quantity
            });
          }
        });
      }
    });
  }

  openDialog() {
    this.dialog.open(NewOrderComponent, {
      data: {
        order: 'panda'
      }
    }).afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  orderMarked(event: any) {
    let index = this.orders.indexOf(event.data);
    let item = this.orders.splice(index, 1)[0];
    item.active = false;
    this.orders.push(item);
    this.activeItems();
  }

}
