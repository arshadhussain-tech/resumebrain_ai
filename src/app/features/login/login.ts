import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NotificationService } from '../../core/services/notification.service';
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

  constructor(
    private notificationService: NotificationService
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

    console.log('Login request prepared:', {
      email: request.email
    });

    this.notificationService.info(
      'Login will be connected to the Spring Boot authentication API.'
    );
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }
}