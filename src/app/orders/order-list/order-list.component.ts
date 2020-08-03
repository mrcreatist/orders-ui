import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  @Input() item: string;
  @Input() quantity: number;
  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
  }

}
