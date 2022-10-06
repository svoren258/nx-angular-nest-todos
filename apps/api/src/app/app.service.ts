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

  addTodo(todo: TodoDTO): Todo {
    const { title, checked } = todo;
    const newTodo = {
      id: Math.random().toString(),
      title,
      checked
    }
    this.todos.push(newTodo);
    return newTodo;
  }

  toggleTodo(id: string): Todo {
    this.todos = this.todos.map(todo => todo.id == id ? {
      ...todo,
      checked: !todo.checked
    } : todo);
    return this.todos.find(todo => todo.id === id);
  }
}
