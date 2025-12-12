import { Component, computed, input, signal } from '@angular/core';
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
  timerIsStarted = signal(false);
  controlButtons = computed<ControlButton[]>(() => [
    {
      label: this.timerIsStarted() ? 'Pause' : 'Play',
      icon: this.timerIsStarted() ? 'timer_pause' : 'timer_play',
      hierarchy: 'primary',
      onClick: () => (this.timerIsStarted() ? this.pauseTimer() : this.playTimer()),
    },
    {
      label: 'Reset',
      icon: 'settings_backup_restore',
      hierarchy: 'secondary',
      onClick: () => this.resetTimer(),
    },
  ]);
  remainingTimeInSeconds = input.required<number>()
  intervalId: any = null;

  playTimer() {
    this.timerIsStarted.set(true);
    this.intervalId = setInterval(() => {
      if (this.remainingTimeInSeconds() > 0) {
        this.remainingTimeInSeconds.update((prev) => prev - 1);
      } else {
        this.pauseTimer();
      }
    }, 1000);
  }
  pauseTimer() {
    this.timerIsStarted.set(false);
    clearInterval(this.intervalId);
  }
  resetTimer() {
    this.timerIsStarted.set(false);
    clearInterval(this.intervalId);
    this.remainingTimeInSeconds.set(25 * 60);
  }
}
