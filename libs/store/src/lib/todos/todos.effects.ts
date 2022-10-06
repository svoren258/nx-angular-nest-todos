import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Todo } from '@todos/data';
import { map, switchMap } from 'rxjs';
import { addTodo, addTodoSuccess, getTodos, getTodosSuccess, toggleTodo, toggleTodoSuccess } from './todos.actions';

@Injectable()
export class TodosEffects {
  getTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTodos),
      switchMap(() => this.httpClient.get<Todo[]>('/api/todos').pipe(
        map((todos) => getTodosSuccess({ todos }))
      )),
  ));

  toggleTodo$ = createEffect(() =>
  this.actions$.pipe(
    ofType(toggleTodo),
    switchMap(({ id }) => this.httpClient.put<Todo>('/api/toggleTodo', { id }).pipe(
      map((todo) => toggleTodoSuccess({ todo }))
    ))
  ));

  addTodo$ = createEffect(() =>
  this.actions$.pipe(
    ofType(addTodo),
    switchMap(({ todo: { title, checked } }) => this.httpClient.post<Todo>('/api/addTodo', { title, checked }).pipe(
      map((todo) => addTodoSuccess({ todo }))
    ))
  ));

  constructor(private readonly actions$: Actions,
              private readonly httpClient: HttpClient) {
  }
}
