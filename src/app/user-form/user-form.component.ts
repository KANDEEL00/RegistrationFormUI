import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../shared/models/user';
import { AddressFormComponent } from '../address-form/address-form.component';

@Component({
  selector: 'user-form',
  standalone: true,
  imports: [FormsModule, AddressFormComponent],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  user: User = new User();

  registerUser() {
    console.log('User Registered');
    console.log(this.user);
    this.user = new User();
  }
}
