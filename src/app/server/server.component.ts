import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverId: number = 10; // explicit type assignment
  serverStatus = 'offline'; // inferred type assignment

  getServerStatus() {
    return this.serverStatus;
  }
}
