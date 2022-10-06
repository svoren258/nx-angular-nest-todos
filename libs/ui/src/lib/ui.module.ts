import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzListModule } from 'ng-zorro-antd/list';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  imports: [CommonModule, NzListModule, NzButtonModule, NzIconModule, FormsModule, NzCheckboxModule],
  declarations: [TodosComponent],
  exports: [TodosComponent],
})
export class UiModule {}
