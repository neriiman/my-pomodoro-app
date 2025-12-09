import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-tab-bar',
  imports: [RouterLink, RouterLinkActive, MatIconModule],
  templateUrl: './tab-bar.component.html',
  styleUrl: './tab-bar.component.scss',
})
export class TabBarComponent {
  navItems = signal([
    {
      path: '/',
      tab: 'Focus',
      exact: true,
      ariaLabel: '',
      icon: 'timer',
    },
    {
      path: '/tasks',
      tab: 'Tasks',
      exact: false,
      ariaLabel: 'assignments',
      icon: 'assignment',
    },
    {
      path: '/settings',
      tab: 'Settings',
      exact: false,
      ariaLabel: 'settings',
      icon: 'settings',
    },
  ]);
}
