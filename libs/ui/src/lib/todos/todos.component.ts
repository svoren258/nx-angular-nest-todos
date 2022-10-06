import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '@todos/data';

@Component({
  selector: 'todos-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[] = [];
  @Output() readonly checkTodo = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onCheckTodo(id: string): void {
    this.checkTodo.emit(id);
  }
}
