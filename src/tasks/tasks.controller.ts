import { Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  sayHai(){
    return 'hai buddy'
  }
  @Get()
  getAllTasks():Task[] {
    return this.tasksService.getAllTasks();
  }
}
