import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { Todo, TodoDTO } from '@todos/data';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('todos')
  getTodos(): Todo[] {
    return this.appService.getTodos();
  }

  @Post('addTodo')
  addTodo(@Body() todo: TodoDTO): Todo {
    return this.appService.addTodo(todo);
  }

  @Put('toggleTodo')
  toggleTodo(@Body() { id }: { id: string }): Todo {
    return this.appService.toggleTodo(id);
  }
}
