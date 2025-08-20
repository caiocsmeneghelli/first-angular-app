import { Component, Input, Output, EventEmitter, input, computed } from '@angular/core';

type UserAlias = { id: string; avatar: string; name: string; };
interface IUser {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({required: true}) user!: IUser;

  @Output() selectUser = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.selectUser.emit(this.user.id);
  }
}
