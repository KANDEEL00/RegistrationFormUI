import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../shared/models/user';
import { AddressFormComponent } from '../address-form/address-form.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user-form',
  standalone: true,
  imports: [FormsModule, AddressFormComponent],
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
