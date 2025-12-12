import { Component, signal } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

interface ControlButton {
  label: 'Start' | 'Pause' | 'Reset';
  icon: string;
  hierarchy: 'primary' | 'secondary';
}

@Component({
  selector: 'app-control-buttons',
  imports: [ButtonComponent],
  templateUrl: './control-buttons.component.html',
  styleUrl: './control-buttons.component.scss',
})
export class ControlButtonsComponent {
  timerIsStarted = signal(false);
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
  timeInMinutes = signal<number>(25);
  timeInseconds = signal<number>(0);
}
