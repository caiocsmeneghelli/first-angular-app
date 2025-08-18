import { Component, Input, Output, EventEmitter, input, computed } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';


const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  @Output() selectUser = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    this.selectUser.emit(this.id);
  }
}
