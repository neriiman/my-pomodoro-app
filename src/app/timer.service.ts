import { computed, effect, Injectable, signal } from '@angular/core';

type Mode = 'Focus' | 'Short break' | 'Long break';

interface ModeButton {
  mode: Mode;
  icon: string;
  time: number;
}

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  activeMode = signal<Mode>('Focus');

  durations: Record<Mode, number> = {
    Focus: 25 * 60,
    'Short break': 5 * 60,
    'Long break': 30 * 60,
  };

  maxTime = computed(() => this.durations[this.activeMode()]);

  remainingTime = signal(this.durations.Focus);

  remainingTimeInPercentage = computed<number>(() =>
    Math.floor((this.remainingTime() / this.maxTime()) * 100)
  );

  timerIsRunning = signal(false);

  focusCount = signal(0);

  intervalId: any = null;

  constructor() {
    effect(() => this.remainingTime.set(this.maxTime()));
  }

  playTimer() {
    this.timerIsRunning.set(true);
    this.intervalId = setInterval(() => {
      if (this.remainingTime() > 0) {
        this.remainingTime.update((prev) => prev - 1);
      } else {
        this.resetTimer();
        this.finishSession();
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
    this.remainingTime.set(this.maxTime());
  }
  finishSession() {
    if (this.activeMode() === 'Focus') {
      this.countPomodoros();
    }
    this.nextSession();
  }
  nextSession() {
    if (this.activeMode() === 'Focus') {
      if (this.focusCount() % 4 === 0) this.setActiveMode('Long break');
      else {
        this.setActiveMode('Short break');
      }
    } else {
      this.setActiveMode('Focus');
    }
  }
  setActiveMode(mode: Mode) {
    this.activeMode.set(mode);
  }
  countPomodoros() {
    this.focusCount.update((prev) => prev + 1);
  }
}
