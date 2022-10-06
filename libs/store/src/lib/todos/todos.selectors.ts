import { AppState } from '@todos/data';

export const selectTodos = ({ todosState }: AppState) => todosState.todos;
