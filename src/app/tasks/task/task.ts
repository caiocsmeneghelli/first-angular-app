import { Component, inject, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common'

import { ITask } from './task.model';
import { Card } from "../../shared/card/card";
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [DatePipe, Card],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({required: true}) task!: ITask;

  private taskService = inject(TasksService);

  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
  }
}
