import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { UserFormComponent } from './user-form/user-form.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterComponent, UserFormComponent, AddressFormComponent],
  imports: [CommonModule, RegisterRoutingModule, ReactiveFormsModule],
  exports: [UserFormComponent],
})
export class RegisterModule {}
