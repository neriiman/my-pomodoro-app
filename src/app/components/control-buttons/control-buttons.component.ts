import { Component, computed, input, model, signal } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { FormatTimePipe } from '../../pipes/format-time.pipe';

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
  maxTime = input.required<number>()
  timerIsRunning = signal(false);
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
  remainingTimeInSeconds = model.required<number>()
  intervalId: any = null;

  playTimer() {
    this.timerIsRunning.set(true);
    this.intervalId = setInterval(() => {
      if (this.remainingTimeInSeconds() > 0) {
        this.remainingTimeInSeconds.update((prev) => prev - 1);
      } else {
        this.resetTimer();
      }
    }, 1000);
  }
  pauseTimer() {
    this.timerIsRunning.set(false);
    clearInterval(this.intervalId);
  }
  resetTimer() {
    this.timerIsRunning.set(false);
    clearInterval(this.intervalId);
    this.remainingTimeInSeconds.set(this.maxTime());
  }
}
