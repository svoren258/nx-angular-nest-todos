import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TodoDTO } from './dto/todo.dto';
import { Todo } from './models/todo.model';
import { TodosService } from './todos.service';

@Resolver(of => Todo)
export class TodosResolver {
  constructor(private readonly todosService: TodosService) {}

  @Query(returns => [Todo])
  getTodos(): Promise<Todo[]> {
    return this.todosService.getTodos();
  }

  @Mutation(returns => Todo)
  async addTodo(
    @Args('todo') todo: TodoDTO,
  ): Promise<Todo> {
    return await this.todosService.addTodo(todo);
  }

  @Mutation(returns => Todo)
  async toggleTodo(@Args('id') id: string) {
    return this.todosService.toggleTodo(id);
  }
}
