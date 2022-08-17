import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]', //recognise by attribute
  //selector: '.app-servers' //recognise by class
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `
  //templateUrl: './servers.component.html',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
 
  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server was created.";
  serverName = 'TestServer';
  serverCreated: boolean = false;
  servers: string[] = ['TestServer 1','TestServer 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },4000)
  
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    //console.log(event);
    //doesn't work without explicit casting. let angular know it is a html input element.
    this.serverName = (<HTMLInputElement>event.target).value;
  } 


}
