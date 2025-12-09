import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-timer',
  imports: [MatProgressSpinner, MatIconModule],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss',
})
export class TimerComponent {
  activeButton = signal('Focus');
  buttons = signal([
    {
      label: 'Focus',
      icon: 'laptop-windows',
    },
    {
      label: 'Short break',
      icon: 'self_improvement',
    },
    {
      label: 'Long break',
      icon: 'self_improvement',
    },
  ]);
  setActiveButton(label: string) {
    this.activeButton.set(label);
  }
}
