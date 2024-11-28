import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../shared/models/user';

@Component({
  selector: 'user-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  user: User = new User();

  registerUser() {
    console.log('User Registered');
    console.log('First Name: ' + this.user.firstName);
    console.log('Middle Name: ' + this.user.middleName);
    console.log('Last Name: ' + this.user.lastName);
    console.log('Birth Date: ' + this.user.birthDate);
    console.log('Mobile Number: ' + this.user.mobileNumber);
    console.log('Email: ' + this.user.email);
  }
}
