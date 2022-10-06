export interface Todo {
  id: string;
  title: string;
  checked: boolean;
}

export type TodoDTO = Omit<Todo, 'id'>;
