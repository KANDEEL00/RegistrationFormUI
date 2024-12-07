import { NgModule, provideZoneChangeDetection } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { UserFormComponent } from './components/user-form/user-form.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, UserFormComponent, AddressFormComponent],
  imports: [BrowserModule, FormsModule],
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
