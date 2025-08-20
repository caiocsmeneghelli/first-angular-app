import { Component, Input } from '@angular/core';

import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { INewTaskData } from './task/task.model';

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

  onStartAddTask() {
    this.isAddingTasks = true;
    console.log('Start adding a new task');
  }

  onCancelAddTask() {
    this.isAddingTasks = false;
  }

  onCreateTask(taskData: INewTaskData) {
    const newTask = {
      id: Math.random().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: new Date(taskData.dueDate)
    };
    this.tasks.push(newTask);
    this.isAddingTasks = false;
  }
}
