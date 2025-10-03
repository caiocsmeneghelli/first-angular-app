import { Injectable } from '@angular/core';
import { type INewTaskData } from './task/task.model';

@Injectable({
  providedIn: 'root'
})

export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Task 1',
      summary: 'Description for Task 1',
      dueDate: new Date('2023-03-15'),
    },
    {
      id: 't2',
      userId: 'u1',
      title: 'Task 2',
      summary: 'Description for Task 2',
      dueDate: new Date('2023-03-16'),
    },
    {
      id: 't3',
      userId: 'u1',
      title: 'Task 3',
      summary: 'Description for Task 3',
      dueDate: new Date('2023-03-17'),
    },
  ];

  constructor(){
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getTasksByUserId(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: INewTaskData, userId: string) {
    this.tasks.unshift({
      id: Math.random().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: new Date(taskData.dueDate),
    });
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
