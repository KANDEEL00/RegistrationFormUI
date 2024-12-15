import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';
import { PreventUnsavedChangesGuard } from '../../guards/prevent-unsaved-changes.guard';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    canDeactivate: [PreventUnsavedChangesGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
