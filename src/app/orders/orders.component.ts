import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewOrderComponent } from './new-order/new-order.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    // this.openDialog();
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

}
