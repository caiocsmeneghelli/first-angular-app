import { Component, Input } from '@angular/core';

import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { INewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input({required: true}) userId!: string;
  @Input() selectedUser: string | undefined;
  isAddingTasks = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getTasksByUserId(this.userId);
  }

  onStartAddTask() {
    this.isAddingTasks = true;
  }

  onCloseAddTask() {
    this.isAddingTasks = false;
  }
}
