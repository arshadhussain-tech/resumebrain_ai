import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api';
import { Resume } from '../models/resume.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private readonly endpoint = 'resumes';

  constructor(private api: ApiService) {}

  getAll(): Observable<Resume[]> {
    return this.api.get<Resume[]>(this.endpoint);
  }

  getById(id: string): Observable<Resume> {
    return this.api.get<Resume>(`${this.endpoint}/${id}`);
  }

  upload(file: File): Observable<Resume> {
    const formData = new FormData();
    formData.append('file', file);

    return this.api.post<Resume>(this.endpoint, formData);
  }

  delete(id: string): Observable<void> {
    return this.api.delete<void>(`${this.endpoint}/${id}`);
  }
}