import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@todos/data';
import { addTodo, getTodos, selectTodos, toggleTodo } from '@todos/store';

@Component({
  selector: 'todos-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  todoInputForm = this.fb.group({
    todoTitle: ''
  });

  readonly todos$ = this.store.select(selectTodos);

  constructor(private readonly http: HttpClient,
              private readonly fb: FormBuilder,
              private readonly store: Store<AppState>) {
    this.fetch();
  }

  fetch(): void {
    this.store.dispatch(getTodos());
  }

  addTodo(): void {
    const title = this.todoInputForm.controls.todoTitle.value;
    if (title) {
      this.store.dispatch(addTodo({ todo: {
        title, checked: false
        }
      }));
      this.todoInputForm.reset();
    }
  }

  toggleTodo(id: string): void {
    this.store.dispatch(toggleTodo({ id }));
  }
}
