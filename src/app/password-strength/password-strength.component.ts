import { Component } from '@angular/core';
import { PasswordStrengthService } from '../password-strength.service';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
})
export class PasswordStrengthComponent {
  password = '';

  strengthColor: string[] = ['gray', 'gray', 'gray'];

  feedbackMessage = '';

  showPassword = false;

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  checkPasswordStrength() {
    const colors = this.passwordStrengthService.checkPasswordStrength(
      this.password,
    );
    this.strengthColor = colors;

    if (colors[2] === 'green') {
      this.feedbackMessage = 'Password is strong :)';
    } else if (
      colors[0] === 'gray' &&
      colors[1] === 'gray' &&
      colors[2] === 'gray'
    ) {
      this.feedbackMessage = '';
    } else {
      this.feedbackMessage =
        'Make sure your password is more than 8 characters, contains a combination of letters, numbers, and symbols.';
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
