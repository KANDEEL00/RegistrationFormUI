import { NgModule, provideZoneChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { UserFormComponent } from './components/user-form/user-form.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [AppComponent, UserFormComponent, AddressFormComponent, HomeComponent,],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
