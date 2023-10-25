import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  checkPasswordStrength(password: string): string[] {
    if (password === '') {
      return ['gray', 'gray', 'gray'];
    }

    const hasLetter = /[a-zA-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[^a-zA-Z0-9]/.test(password);

    if (password.length < 8) {
      return ['red', 'red', 'red'];
    }

    if (hasLetter && hasDigit && hasSpecialChar) {
      return ['green', 'green', 'green'];
    }

    if (
      (hasLetter && hasSpecialChar) ||
      (hasLetter && hasDigit) ||
      (hasSpecialChar && hasDigit)
    ) {
      return ['yellow', 'yellow', 'gray'];
    }

    return ['red', 'gray', 'gray'];
  }
}
