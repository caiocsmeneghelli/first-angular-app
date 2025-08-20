import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IUser } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({required: true}) user!: IUser;
  @Input({required: true}) selected!: boolean;
  @Output() selectUser = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.selectUser.emit(this.user.id);
  }
}
