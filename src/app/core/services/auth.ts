import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api';
import { LoginRequest, RegisterRequest, User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly endpoint = 'auth';

  constructor(private api: ApiService) {}

  login(request: LoginRequest): Observable<User> {
    return this.api.post<User>(`${this.endpoint}/login`, request);
  }

  register(request: RegisterRequest): Observable<User> {
    return this.api.post<User>(`${this.endpoint}/register`, request);
  }
}