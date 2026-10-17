import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  showPassword = false;
  showConfirmPassword = false;

  constructor(
    private notificationService: NotificationService
  ) {}

  register(): void {
    if (
      !this.name ||
      !this.email ||
      !this.password ||
      !this.confirmPassword
    ) {
      this.notificationService.warning(
        'Please fill in all required fields.'
      );
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.notificationService.error(
        'Passwords do not match.'
      );
      return;
    }

    this.notificationService.info(
      'Registration will be connected to the Spring Boot authentication API.'
    );
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}