import { Component, signal } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

interface TimerButton {
  label: 'Focus' | 'Short break' | 'Long break';
  icon: string;
}

@Component({
  selector: 'app-timer-buttons',
  imports: [ButtonComponent],
  templateUrl: './timer-buttons.component.html',
  styleUrl: './timer-buttons.component.scss',
})
export class TimerButtonsComponent {
  activeButton = signal('Focus');
  timerButtons = signal<TimerButton[]>([
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
  setActiveTimerButton(label: string) {
    this.activeButton.set(label);
  }
}
