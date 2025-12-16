import { Injectable, signal } from '@angular/core';
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
@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos = signal<Todo[]>(defaultTodos);
}
