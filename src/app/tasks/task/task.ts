import { Component, inject, Input, Output } from '@angular/core';

import { ITask } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.html',
  styleUrl: './task.css',
  standalone: false
})
export class Task {
  @Input({required: true}) task!: ITask;

  private taskService = inject(TasksService);

  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
  }
}
