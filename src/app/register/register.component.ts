import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private socket: SocketService,
    private router: Router
  ) {
    if (this.socket.isUser()) {
      this.router.navigateByUrl('/');
    }
  }

  ngOnInit(): void {
  }

  register(first: string, last: string, code: number) {
    this.socket.register(first, last, code);
    this.router.navigateByUrl('/');
  }

}
