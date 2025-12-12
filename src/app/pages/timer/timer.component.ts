import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { ButtonComponent } from '../../components/button/button.component';
import { TimerButtonsComponent } from '../../components/timer-buttons/timer-buttons.component';
import { ControlButtonsComponent } from '../../components/control-buttons/control-buttons.component';
@Component({
  selector: 'app-timer',
  imports: [MatProgressSpinner, MatIconModule, TimerButtonsComponent, ControlButtonsComponent],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss',
})
export class TimerComponent {
  remainingTime = signal<number>(60*25);
}
