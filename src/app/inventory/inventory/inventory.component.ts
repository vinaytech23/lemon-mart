import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-inventory',
  template: `
    <mat-toolbar color="accent" fxLayoutGap="8px">
      <a
        mat-button
        routerLink="/inventory/inventoryDashboard"
        routerLinkActive="active-Link"
        >inventory's Dashboard</a
      >
      <a mat-button routerLink="/inventory/stockEntry" routerLinkActive="active-Link"
        >Stock Entry</a
      >
      <a mat-button routerLink="/inventory/products" routerLinkActive="active-Link"
        >Products</a
      >
      <a mat-button routerLink="/inventory/categories" routerLinkActive="active-Link"
        >Categories</a
      >
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class InventoryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
