import { Component, inject } from '@angular/core';
import { TaskComponent } from '../../components/task/task.component';
import { TodosService } from '../../services/todos.service';
import { Todo } from '../../model/todo.type';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  todosService = inject(TodosService);
  todos = this.todosService.todos;
 
}
