import { Component, computed, inject, input, model, signal } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { FormatTimePipe } from '../../pipes/format-time.pipe';
import { TimerService } from '../../timer.service';

interface ControlButton {
  label: 'Play' | 'Pause' | 'Reset';
  icon: string;
  hierarchy: 'primary' | 'secondary';
  onClick: () => void;
}

@Component({
  selector: 'app-control-buttons',
  imports: [ButtonComponent, FormatTimePipe],
  templateUrl: './control-buttons.component.html',
  styleUrl: './control-buttons.component.scss',
})
export class ControlButtonsComponent {
  timer = inject(TimerService);
  remainingTime = this.timer.remainingTime;
  timerIsRunning = this.timer.timerIsRunning
  controlButtons = computed<ControlButton[]>(() => [
    {
      label: this.timerIsRunning() ? 'Pause' : 'Play',
      icon: this.timerIsRunning() ? 'timer_pause' : 'timer_play',
      hierarchy: 'primary',
      onClick: () => (this.timerIsRunning() ? this.pauseTimer() : this.playTimer()),
    },
    {
      label: 'Reset',
      icon: 'settings_backup_restore',
      hierarchy: 'secondary',
      onClick: () => this.resetTimer(),
    },
  ]);

  playTimer() {
    this.timer.playTimer();
  }
  pauseTimer() {
    this.timer.pauseTimer();
  }
  resetTimer() {
    this.timer.resetTimer();
  }
}
