import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-tab-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './tab-bar.component.html',
  styleUrl: './tab-bar.component.scss',
})
export class TabBarComponent {
  navItems = signal([
    {
      path: '/',
      tab: 'Timer',
      exact: true,
    },
    {
      path: '/tasks',
      tab: 'Tasks',
      exact: false,
    },
    {
      path: '/settings',
      tab: 'Settings',
      exact: false,
    },
  ]);
}
