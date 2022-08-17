import { style } from "@angular/animations";
import { Component } from "@angular/core";


@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
      .online {
        color: white;
      }
    `]
})
export class ServerComponent {

  serverId: number = 0;
  serverStatus: string = 'offline';

  getServerStatus() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus == 'online' ? 'green' : 'red';
  }
}