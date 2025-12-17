import { computed, Injectable, signal } from '@angular/core';
import { Todo } from '../model/todo.type';
const defaultTodos: Todo[] = [
  {
    id: 1,
    label: 'Planera fokuspass',
    description: 'Bestäm vilka uppgifter som ska göras under nästa fokuspass',
    isCompleted: false,
    priority: 'high',
  },
  {
    id: 2,
    label: 'Drick vatten',
    description: 'Fyll på vattenflaskan innan nästa session',
    isCompleted: true,
    priority: 'low',
  },
  {
    id: 3,
    label: 'Rensa inboxen',
    description: 'Arkivera eller svara på viktiga mejl',
    isCompleted: false,
    priority: 'medium',
  },
  {
    id: 4,
    label: 'Stretch',
    description: 'Gör några enkla stretchövningar',
    isCompleted: false,
    priority: 'low',
  },
];

type TasksCompletionState = 'empty' | 'allCompleted' | 'noneCompleted' | 'inProgress';
@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos = signal<Todo[]>(defaultTodos);

  uncompletedTasks = computed(() => this.todos().filter((task) => !task.isCompleted));

  completedTasks = computed(() => this.todos().filter((task) => task.isCompleted));

  tasksCompletionState = computed<TasksCompletionState>(() => {
    if (this.todos().length === 0) return 'empty';

    if (this.todos().length > 0 && this.uncompletedTasks().length === 0) return 'allCompleted';

    if (this.todos().length > 0 && this.completedTasks().length === 0) return 'noneCompleted';

    return 'inProgress';
  });

  tasksOverviewState = computed(() => ({
    totalTodos: this.todos().length,
    completed: this.completedTasks().length,
    remaining: this.uncompletedTasks().length,
    completionState: this.tasksCompletionState()
  }));

  toggleIsChecked(id: number) {
    this.todos.update((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              isCompleted: !item.isCompleted,
            }
          : item
      )
    );
  }
}
