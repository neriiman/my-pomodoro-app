import { Component, computed, inject, input, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ButtonComponent } from '../button/button.component';
import { TitleCasePipe } from '@angular/common';
import { Priority, Todo } from '../../model/todo.type';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-task',
  imports: [MatIcon, ButtonComponent, TitleCasePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  todosService = inject(TodosService);
  todo = input.required<Todo>();

  toggleIsChecked() {
    this.todosService.toggleIsChecked(this.todo().id);
  }
}
