import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})

export class OrderTableComponent implements OnInit {
  @Input() data: any;
  @Output() marked = new EventEmitter<any>();

  displayedColumns: string[] = ['item', 'quantity'];

  constructor() { }

  ngOnInit(): void {
  }

  complete(id: string) {
    this.marked.emit({ data: this.data });
  }

}
