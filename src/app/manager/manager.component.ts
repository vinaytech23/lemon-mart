import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  template: `
    <mat-toolbar color="accent">
      <a mat-button routerLink="/manager/home"
      routerLinkActive="active-Link">Manager's Dashboard</a>
      <a mat-button routerLink="/manager/users" routerLinkActive="active-Link">User Management</a>
      <a mat-button routerLink="/manager/receipts" routerLinkActive="active-Link">Receipt Lookup</a>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [`
  div[fxLayout] { margin-top:32px;}
  .active-Link{
    font-weight:bold;
    border-bottom:2px solid #005005;
  }
  `
  ]
})
export class ManagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
