import { Injectable } from '@nestjs/common';
import { Todo, TodoDTO } from '@todos/data';

@Injectable()
export class AppService {
  todos: Todo[] = [
    { id: '1', title: 'Todo 1', checked: false },
    { id: '2', title: 'Todo 2', checked: true }
  ];

  getData(): Todo[] {
    return this.todos;
  }

  addTodo(todo: TodoDTO): void {
    const { title, checked } = todo;
    this.todos.push({
      id: Math.random().toString(),
      title,
      checked
    });
  }

  toggleTodo(id: string): void {
    this.todos = this.todos.map(todo => todo.id == id ? {
      ...todo,
      checked: !todo.checked
    } : todo);
  }
}
