import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent {
  password: string = '';
  strengthColor: string[] = ['gray', 'gray', 'gray'];
  feedbackMessage: string = '';
  showPassword: boolean = false;

  checkPasswordStrength() {
    if (this.password === '') {
      this.strengthColor = ['gray', 'gray', 'gray'];
      this.feedbackMessage = ''; 
    } else if (this.password.length < 8) {
      this.strengthColor = ['red', 'red', 'red'];
      this.feedbackMessage = 'Password should be at least 8 characters.';
    } else if (/[a-zA-Z]/.test(this.password) && /[0-9]/.test(this.password) && /[^a-zA-Z0-9]/.test(this.password)) {
      this.strengthColor = ['green', 'green', 'green'];
      this.feedbackMessage = 'Password is strong :)';
    } else if ((/[a-zA-Z]/.test(this.password) && /[^a-zA-Z0-9]/.test(this.password)) ||
               (/[a-zA-Z]/.test(this.password) && /[0-9]/.test(this.password)) ||
               (/[^a-zA-Z0-9]/.test(this.password) && /[0-9]/.test(this.password))) {
      this.strengthColor = ['yellow', 'yellow', 'gray'];
      this.feedbackMessage = 'Make sure your password contains combination of letters, numbers, and symbols.';
    } else {
      this.strengthColor = ['red', 'gray', 'gray'];
      this.feedbackMessage = 'Password is weak. Use a combination of letters, numbers, and symbols.';
    }
    let updatedStrengthColor: string[];
    setTimeout(() => {
      this.strengthColor = updatedStrengthColor;
    }, 200);
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
