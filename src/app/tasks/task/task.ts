import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common'

import { ITask } from './task.model';

@Component({
  selector: 'app-task',
  imports: [DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({required: true}) task!: ITask;
  @Output() completeTask = new EventEmitter<string>();

  onCompleteTask() {
    this.completeTask.emit(this.task.id);
  }
}
