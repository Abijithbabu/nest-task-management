import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(title: string, description: string): Task {
    const task: Task = {
      id: new Date().toUTCString(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task)
    return task;
  }
}
