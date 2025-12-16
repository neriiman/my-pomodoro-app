import { Component, input, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ButtonComponent } from '../button/button.component';
import { TitleCasePipe } from '@angular/common';
import { Priority } from '../../model/todo.type';

@Component({
  selector: 'app-task',
  imports: [MatIcon, ButtonComponent, TitleCasePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  isChecked = signal(true);
  priority = input<Priority>('high');
  label = input.required<string>();
  description = input<string>();
  toggleIsChecked() {
    this.isChecked.update((prev) => !prev);
  }
}
