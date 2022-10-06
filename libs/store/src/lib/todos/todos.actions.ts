import { createAction, props } from '@ngrx/store';
import { Todo, TodoDTO } from '@todos/data';

export const getTodos = createAction(
  '[Todos] Get Todos'
);

export const getTodosSuccess = createAction(
  '[Todos] Get Todos Success',
  props<{ todos: Todo[] }>()
);

export const addTodo = createAction(
  '[Todo] Add Todo',
  props<{ todo: TodoDTO }>()
);

export const addTodoSuccess = createAction(
  '[Todo] Add Todo Success',
  props<{ todo: Todo }>()
);

export const toggleTodo = createAction(
  '[Todos] Toggle Todo',
  props<{ id: string }>()
);

export const toggleTodoSuccess = createAction(
  '[Todos] Toggle Todo Success',
  props<{ todo: Todo }>()
);

