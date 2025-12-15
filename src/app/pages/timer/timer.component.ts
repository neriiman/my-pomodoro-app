import { Component, computed, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { ModeButtonsComponent } from '../../components/mode-buttons/mode-buttons.component';
import { ControlButtonsComponent } from '../../components/control-buttons/control-buttons.component';
import { FormatTimePipe } from '../../pipes/format-time.pipe';
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
  maxTime = signal(25 * 60);
  remainingTime = signal(this.maxTime());
  remainingTimeInPercentage = computed<number>(() =>
    Math.floor((this.remainingTime() / this.maxTime()) * 100)
  );
}
