import { Component, model, output, signal } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

type Mode = 'Focus' | 'Short break' | 'Long break';
enum ModeTime {
  focus = 25*60,
  shortBreak = 5*60,
  longBreak = 30*60,
}

interface ModeButton {
  mode: Mode;
  icon: string;
  time: ModeTime;
}

@Component({
  selector: 'app-mode-buttons',
  imports: [ButtonComponent],
  templateUrl: './mode-buttons.component.html',
  styleUrl: './mode-buttons.component.scss',
})
export class ModeButtonsComponent {
  activeMode = signal<Mode>('Focus');
  modeButtons = signal<ModeButton[]>([
    {
      mode: 'Focus',
      icon: 'laptop-windows',
      time: 25*60,
    },
    {
      mode: 'Short break',
      icon: 'self_improvement',
      time: 5*60,
    },
    {
      mode: 'Long break',
      icon: 'self_improvement',
      time: 30*60,
    },
  ]);
  modeTime = model<ModeTime>();
  setActiveMode(mode: Mode, time: ModeTime) {
    this.activeMode.set(mode);
    this.modeTime.set(time);
  }
}
