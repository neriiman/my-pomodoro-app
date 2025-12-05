import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabBarComponent } from "./components/tab-bar/tab-bar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TabBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected readonly title = signal('my-pomodoro-app');
}
