import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Todo } from '@todos/data';

@Component({
  selector: 'todos-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todoInputForm = this.fb.group({
    todoTitle: ''
  });

  todos: Todo[] = [];

  constructor(private readonly http: HttpClient,
              private readonly fb: FormBuilder) {
    this.fetch();
  }

  fetch(): void {
    this.http.get<Todo[]>('/api/todos').subscribe((t) => (this.todos = t));
  }

  addTodo(): void {
    const title = this.todoInputForm.controls.todoTitle.value;
    this.http.post('/api/addTodo', { title, checked: false }).subscribe(() => {
      this.fetch();
    });
    this.todoInputForm.reset();
  }

  toggleTodo(id: string): void {
    this.http.put('/api/toggleTodo', { id }).subscribe(() =>
      this.fetch()
    );
  }
}
