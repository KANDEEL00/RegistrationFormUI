import { Component } from '@angular/core';
import {
  CanComponentDeactivate,
  CanDeactivateType,
} from '../../guards/prevent-unsaved-changes.guard';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements CanComponentDeactivate {
  isUnsaved: boolean = false;

  canDeactivate(): boolean {
    if (this.isUnsaved) {
      return confirm(
        'You have unsaved changes. Are you sure you want to leave?'
      );
    }
    return true;
  }
}
