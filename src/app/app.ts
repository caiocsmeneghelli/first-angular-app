import { Component, signal } from '@angular/core';

import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
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
