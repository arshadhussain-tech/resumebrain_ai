import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NotificationService } from '../../core/services/notification.service';
import { AuthService } from '../../core/services/auth';
import { RegisterRequest } from '../../core/models/user.model';

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
  isLoading = false;

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  register(): void {
    if (
      !this.name.trim() ||
      !this.email.trim() ||
      !this.password ||
      !this.confirmPassword
    ) {
      this.notificationService.warning(
        'Please fill in all required fields.'
      );
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.notificationService.error('Passwords do not match.');
      return;
    }

    const request: RegisterRequest = {
      name: this.name.trim(),
      email: this.email.trim(),
      password: this.password
    };

    this.isLoading = true;

    this.authService.register(request).subscribe({
      next: () => {
        this.isLoading = false;
        this.notificationService.success(
          'Registration successful. Please log in.'
        );
        void this.router.navigate(['/login']);
      },
      error: () => {
        this.isLoading = false;
        this.notificationService.error(
          'Registration failed. Please try again.'
        );
      }
    });
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}