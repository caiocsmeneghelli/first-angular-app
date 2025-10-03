import { Component, Input } from '@angular/core';

import { INewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  standalone: false
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
