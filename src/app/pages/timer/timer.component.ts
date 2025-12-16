import { Component, computed, effect, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { ModeButtonsComponent } from '../../components/mode-buttons/mode-buttons.component';
import { ControlButtonsComponent } from '../../components/control-buttons/control-buttons.component';
import { FormatTimePipe } from '../../pipes/format-time.pipe';
import { TimerService } from '../../timer.service';
@Component({
  selector: 'app-timer',
  imports: [
    MatProgressSpinner,
    MatIconModule,
    ModeButtonsComponent,
    ControlButtonsComponent,
    FormatTimePipe,
  ],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss',
})
export class TimerComponent {
  timer = inject(TimerService);
  remainingTime = this.timer.remainingTime;
  remainingTimeInPercentage = this.timer.remainingTimeInPercentage;
  sessionsCount = this.timer.focusCount
  goalCount = this.timer.goalCount
}
