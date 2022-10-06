import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzListModule } from 'ng-zorro-antd/list';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  imports: [CommonModule, NzListModule, NzButtonModule, NzIconModule],
  declarations: [TodosComponent],
  exports: [TodosComponent],
})
export class UiModule {}
