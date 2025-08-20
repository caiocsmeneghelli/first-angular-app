import { Component, signal } from '@angular/core';

import { Header } from './header/header';
import { User } from './user/user';
import { Tasks } from './tasks/tasks';

import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-angular-app');

  users = DUMMY_USERS;
  selectUser?: string;

  get findSelectedUser() {
    return this.users.find(user => user.id === this.selectUser)!;
  }

  onSelectUser(id: string) {
    this.selectUser = id;
  }
}
