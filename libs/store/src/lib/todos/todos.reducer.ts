import { createReducer, on } from '@ngrx/store';
import { TodosState } from '@todos/data';
import { addTodoSuccess, getTodosSuccess, toggleTodoSuccess } from './todos.actions';

const initialState: TodosState = {
  todos: []
};

export const todosReducer = createReducer(
  initialState,
  on(getTodosSuccess, (state, { todos }) => ({
    ...state,
    todos
  })),
  on(addTodoSuccess, (state, { todo }) => ({
    ...state,
    todos: [
      ...state.todos,
      todo
    ]
  })),
  on(toggleTodoSuccess, (state, { todo: updatedTodo }) => ({
    ...state,
    todos: state.todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo)
  }))
);
