import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';
import { PasswordControlComponent } from './password-control/password-control.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordStrengthComponent,
    PasswordControlComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
