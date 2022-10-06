import { gql } from 'apollo-angular';

export const ADD_TODO = gql`
  mutation addTodo($todo: TodoDTO!) {
    addTodo(todo: $todo) {
      id
      title
      checked
    }
  }
`;

export const TOGGLE_TODO = gql`
  mutation toggleTodo($id: String!) {
    toggleTodo(id: $id) {
      id
      title
      checked
    }
  }
`;
