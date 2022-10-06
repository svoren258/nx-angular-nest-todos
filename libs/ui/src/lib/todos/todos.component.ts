import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '@todos/data';

@Component({
  selector: 'todos-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent {
  @Input() todos: Todo[] = [];
  @Output() readonly checkTodo = new EventEmitter<string>();

  onCheckTodo(id: string): void {
    this.checkTodo.emit(id);
  }
}
