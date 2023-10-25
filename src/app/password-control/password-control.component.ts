import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-password-control',
  templateUrl: './password-control.component.html',
  styleUrls: ['./password-control.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordControlComponent),
      multi: true,
    },
  ],
})
export class PasswordControlComponent implements ControlValueAccessor {
  password = '';

  showPassword = false;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: (value: string) => void = () => {};

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.password = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  updatePassword() {
    this.onChange(this.password);
    this.onTouched();
  }
}
