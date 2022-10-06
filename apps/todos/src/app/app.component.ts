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
  title = 'todos';

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
    this.http.post('/api/addTodo', {}).subscribe(() => {
      this.fetch();
    });
  }
}
