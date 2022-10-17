import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ADD_TODO, GET_TODOS, Todo, TOGGLE_TODO } from '@todos/data';
import { Apollo } from 'apollo-angular';
import { map, switchMap } from 'rxjs';
import { addTodo, addTodoSuccess, getTodos, getTodosSuccess, toggleTodo, toggleTodoSuccess } from './todos.actions';

@Injectable()
export class TodosEffects {
  getTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTodos),
      // GraphQL APOLLO implementation
      switchMap(() => this.apollo.query<{ getTodos: Todo[] }>({
        query: GET_TODOS
      }).pipe(
        map(({ data: { getTodos: todos } }) => getTodosSuccess({ todos }))
      ))

      // REST API implementation
      // switchMap(() => this.httpClient.get<Todo[]>('/api/todos').pipe(
      //   map((todos) => getTodosSuccess({ todos }))
      // )),
  ));

  toggleTodo$ = createEffect(() =>
  this.actions$.pipe(
    ofType(toggleTodo),
    // GraphQL APOLLO implementation
    switchMap(({ id }) => this.apollo.mutate<any>({
      mutation: TOGGLE_TODO,
      variables: {
        id
      }
    }).pipe(
      // @ts-ignore
      map(({ data: { toggleTodo: todo } }) => toggleTodoSuccess({ todo }))
    ))

    // REST API implementation
    // switchMap(({ id }) => this.httpClient.put<Todo>('/api/toggleTodo', { id }).pipe(
    //   map((todo) => toggleTodoSuccess({ todo }))
    // ))
  )
);

  addTodo$ = createEffect(() =>
  this.actions$.pipe(
    ofType(addTodo),
    // GraphQL APOLLO implementation
    switchMap(({ todo }) => this.apollo.mutate<{ addTodo: Todo }>({
      mutation: ADD_TODO,
      variables: {
        todo
      }
    }).pipe(
      // @ts-ignore
      map(({ data: { addTodo: todo} }) => addTodoSuccess({ todo }))
    ))

    // // REST API implementation
    // switchMap(({ todo: { title, checked } }) => this.httpClient.post<Todo>('/api/addTodo', { title, checked }).pipe(
    //   map((todo) => addTodoSuccess({ todo }))
    // ))
  ));

  constructor(private readonly actions$: Actions,
              private readonly httpClient: HttpClient,
              private readonly apollo: Apollo) {
  }
}
