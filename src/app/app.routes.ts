import { Routes } from '@angular/router';
import { TimerComponent } from './pages/timer/timer.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TimerComponent,
    title: 'timer',
  },
  {
    path: 'tasks',
    component: TasksComponent,
    title: 'your tasks',
  },
  {
    path: 'settings',
    component: SettingsComponent,
    title: 'settings',
  },
];
