import { Component, inject, model, output, signal } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { TimerService } from '../../timer.service';

type Mode = 'Focus' | 'Short break' | 'Long break';

interface ModeButton {
  mode: Mode;
  icon: string;
}

@Component({
  selector: 'app-mode-buttons',
  imports: [ButtonComponent],
  templateUrl: './mode-buttons.component.html',
  styleUrl: './mode-buttons.component.scss',
})
export class ModeButtonsComponent {
  timer = inject(TimerService);
  modeButtons = signal<ModeButton[]>([
    {
      mode: 'Focus',
      icon: 'laptop-windows',
    },
    {
      mode: 'Short break',
      icon: 'self_improvement',
    },
    {
      mode: 'Long break',
      icon: 'self_improvement',
    },
  ]);
  activeMode = this.timer.activeMode;
  setActiveMode(mode: Mode) {
    this.timer.setActiveMode(mode);
  }
}
