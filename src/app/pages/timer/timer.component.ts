import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { ButtonComponent } from '../../components/button/button.component';

interface ControlButton {
  label: 'Start' | 'Pause' | 'Reset';
  icon: string;
  hierarchy: 'primary' | 'secondary';
}

interface TimerButton {
  label: 'Focus' | 'Short break' | 'Long break';
  icon: string;
}

@Component({
  selector: 'app-timer',
  imports: [MatProgressSpinner, MatIconModule, ButtonComponent],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss',
})
export class TimerComponent {
  activeButton = signal('Focus');
  timerIsStarted = signal(false);
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
  controlButtons = signal<ControlButton[]>([
    {
      label: this.timerIsStarted() ? 'Pause' : 'Start',
      icon: this.timerIsStarted() ? 'timer_pause' : 'timer_play',
      hierarchy: 'primary',
    },
    {
      label: 'Reset',
      icon: 'settings_backup_restore',
      hierarchy: 'secondary',
    },
  ]);

  setActiveTimerButton(label: string) {
    this.activeButton.set(label);
  }
}
