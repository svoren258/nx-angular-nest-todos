import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InMemoryCache } from '@apollo/client/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { TodosEffects } from './todos/todos.effects';
import { todosReducer } from './todos/todos.reducer';

@NgModule({
  imports: [ApolloModule, CommonModule, EffectsModule.forRoot([TodosEffects]), StoreModule.forRoot({
    todosState: todosReducer
  })],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'http://localhost:3000/graphql',
          }),
        };
      },
      deps: [HttpLink],
    },
  ]
})
export class GlobalStoreModule {}
