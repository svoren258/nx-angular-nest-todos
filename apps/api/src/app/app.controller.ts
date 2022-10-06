import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { Todo, TodoDTO } from '@todos/data';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('todos')
  getData(): Todo[] {
    return this.appService.getData();
  }

  @Post('addTodo')
  addTodo(@Body() todo: TodoDTO): void {
    return this.appService.addTodo(todo);
  }

  @Put('toggleTodo')
  toggleTodo(@Body() { id }: { id: string }): void {
    return this.appService.toggleTodo(id);
  }
}
