import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { HomeComponent } from './components/home/home.component';
import { PreventUnsavedChangesGuard } from './guards/prevent-unsaved-changes.guard';
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'register',
    component: UserFormComponent,
    canDeactivate: [PreventUnsavedChangesGuard],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
