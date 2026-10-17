import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NotificationService } from '../../core/services/notification.service';
import { AuthService } from '../../core/services/auth';
import { LoginRequest } from '../../core/models/user.model';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email = '';
  password = '';
  rememberMe = false;
  showPassword = false;
  isLoading = false;

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  login(): void {
    if (!this.email.trim() || !this.password) {
      this.notificationService.warning(
        'Please enter your email and password.'
      );
      return;
    }

    const request: LoginRequest = {
      email: this.email.trim(),
      password: this.password
    };

    this.isLoading = true;

    this.authService.login(request).subscribe({
      next: () => {
        this.isLoading = false;
        this.notificationService.success('Login successful.');
        void this.router.navigate(['/dashboard']);
      },
      error: () => {
        this.isLoading = false;
        this.notificationService.error(
          'Login failed. Please check your credentials or try again later.'
        );
      }
    });
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }
}