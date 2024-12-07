import { Component } from '@angular/core';
import { User } from '../../../shared/models/user';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Address } from '../../../shared/models/address';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  userForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]),
    middleName: new FormControl('', Validators.maxLength(40)),
    lastName: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]),
    birthDate: new FormControl(new Date(), Validators.required),
    mobileNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[- +()0-9]+$'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  addresses: Address[] = [];

  constructor(public userService: UserService) {}

  registerUser() {
    console.log(this.userForm.value);
    if (this.userForm.invalid) {
      console.log('Invalid Form');
      if (this.userForm.controls.firstName.invalid) {
        console.log('Invalid First Name');
      }
      if (this.userForm.controls.middleName.invalid) {
        console.log('Invalid Middle Name');
      }
      if (this.userForm.controls.lastName.invalid) {
        console.log('Invalid Last Name');
      }
      if (this.userForm.controls.birthDate.invalid) {
        console.log('Invalid Birth Date');
      }
      if (this.userForm.controls.mobileNumber.invalid) {
        console.log('Invalid Mobile Number');
        if (this.userForm.controls.mobileNumber.errors!['required']) {
          console.log('Mobile Number is required');
        } else if (this.userForm.controls.mobileNumber.errors!['pattern']) {
          console.log('Mobile Number is invalid');
        }
      }
      if (this.userForm.controls.email.invalid) {
        console.log('Invalid Email');
        if (this.userForm.controls.email.errors!['required']) {
          console.log('Email is required');
        }
        if (this.userForm.controls.email.errors!['email']) {
          console.log('Email is invalid');
        }
        if (this.addresses.length === 0) {
          console.log('At least one address is required');
        }
      }
    } else {
      console.log('Valid Form');
      const user = new User();
      user.firstName = this.userForm.controls.firstName.value!;
      user.middleName = this.userForm.controls.middleName.value!;
      user.lastName = this.userForm.controls.lastName.value!;
      user.birthDate = this.userForm.controls.birthDate.value!;
      user.mobileNumber = this.userForm.controls.mobileNumber.value!;
      user.email = this.userForm.controls.email.value!;
      user.addresses = this.addresses;

      this.userService.addUser(user).subscribe((response) => {
        console.log('User ID: ' + response);
        console.log('User Registered');
        this.userForm.reset();
      });
    }
  }
}
