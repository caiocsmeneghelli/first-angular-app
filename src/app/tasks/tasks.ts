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

  onCompleteTask(taskId: string) {
    this.tasksService.removeTask(taskId);
  }

  onStartAddTask() {
    this.isAddingTasks = true;
  }

  onCancelAddTask() {
    this.isAddingTasks = false;
  }

  onCreateTask(taskData: INewTaskData) {
    this.tasksService.addTask(taskData, this.userId);
    this.isAddingTasks = false;
  }
}
