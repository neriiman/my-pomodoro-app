import { Component, signal } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

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
  activeMode = signal('Focus');
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
  setActiveMode(mode: Mode) {
    this.activeMode.set(mode);
  }
}
