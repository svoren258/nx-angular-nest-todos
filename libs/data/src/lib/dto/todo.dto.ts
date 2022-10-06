import { Todo } from '../models/todo.model';

export type TodoDTO = Omit<Todo, 'id'>;
