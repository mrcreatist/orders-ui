import { Component, OnInit } from '@angular/core';
import { SocketService } from './socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'orders-ui';

  constructor(
    private socket: SocketService
  ) {
  }

  ngOnInit() {
    this.socket.getMenu().subscribe((res: any) => localStorage.setItem('menu', JSON.stringify(res)));
  }
}
