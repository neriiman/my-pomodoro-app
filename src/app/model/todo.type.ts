export type Priority = 'low' | 'medium' | 'high';
export interface Todo {
  id: number;
  label: string;
  description: string;
  isCompleted: boolean;
  priority: Priority;
}

