import { Component } from '@angular/core';
import { User } from '../../../shared/models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  user: User = new User();

  constructor(public userService: UserService) {}

  registerUser() {
    console.log('User Registered');
    this.userService.addUser(this.user).subscribe((response) => {
      console.log('User ID: ' + response);
    });
    this.user = new User();
  }
}
