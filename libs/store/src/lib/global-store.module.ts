import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TodosEffects } from './todos/todos.effects';
import { todosReducer } from './todos/todos.reducer';

@NgModule({
  imports: [CommonModule, EffectsModule.forRoot([TodosEffects]), StoreModule.forRoot({
    todosState: todosReducer
  })],
})
export class GlobalStoreModule {}
