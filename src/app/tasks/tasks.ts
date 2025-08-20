import { Component, Input } from '@angular/core';

import { Task } from './task/task';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input({required: true}) userId!: string;
  @Input() selectedUser: string | undefined;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Task 1',
      summary: 'Description for Task 1',
      dueDate: new Date('2023-03-15')
    },
    {
      id: 't2',
      userId: 'u1',
      title: 'Task 2',
      summary: 'Description for Task 2',
      dueDate: new Date('2023-03-16')
    },
    {
      id: 't3',
      userId: 'u1',
      title: 'Task 3',
      summary: 'Description for Task 3',
      dueDate: new Date('2023-03-17')
    }
  ];

  get selectedUserTasks() {
    console.log('Selected User ID:', this.userId);
    return this.tasks.filter(task => task.userId === this.userId);
  }

  onCompleteTask(taskId: string) {
    console.log('Task completed:', taskId);

    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}
