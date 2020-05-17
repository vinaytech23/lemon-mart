import { Component } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { MatIconRegistry } from '@angular/material/icon'
@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary" fxLayoutGap="8px">
      <button mat-icon-button><mat-icon>menu</mat-icon></button>
      <a mat-icon-button routerLink="/home">
        <mat-icon svgIcon="women"></mat-icon>
        <span class="mat-h2">LemonMart</span>
      </a>
      <span class="flex-spacer"></span>

      <button
        mat-mini-fab
        routerLink="user/profile"
        matTooltip="Profile"
        aria-label="User Profile"
      >
        <mat-icon>account_circle</mat-icon>
      </button>
      <button
        mat-mini-fab
        routerLink="/user/logout"
        matTooltip="Logout"
        aria-label="Lagout"
      >
        <mat-icon>lock_open</mat-icon>
      </button>
    </mat-toolbar>

    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'women',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/img/icons/women.svg')
    )
  }
  title = 'lemon-mart'
}
