import { Injectable } from '@nestjs/common';
import { TodoDTO } from './dto/todo.dto';
import { Todo } from './models/todo.model';

@Injectable()
export class TodosService {
  todos: Todo[] = [
    { id: '1', title: 'Todo 1', checked: false },
    { id: '2', title: 'Todo 2', checked: true }
  ];

  async addTodo(todo: TodoDTO): Promise<Todo> {
    const { title, checked } = todo;
    const newTodo = {
      id: Math.random().toString(),
      title,
      checked
    }
    this.todos = [
      ...this.todos,
      newTodo
    ];
    return newTodo;
  }

  async toggleTodo(id: string): Promise<Todo> {
    this.todos = this.todos.map(todo => todo.id == id ? {
      ...todo,
      checked: !todo.checked
    } : todo);
    return this.todos.find(todo => todo.id === id);
  }

  async getTodos(): Promise<Todo[]> {
    return this.todos;
  }
}
