import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { TodoService } from './todos.service';

@Controller('todos')
export class TodosController {

    constructor( private todosService: TodoService ) { }

    @Get('/all')
    getAllTodos() {
        return this.todosService.getAllTodos();
    }

    @Get(':id')
    findTodo(@Param('id') id) {
       return this.todosService.getTodo(id);
    }

    @Post()
    createTodo(@Body() todo) {
       return todo;
    }

}
