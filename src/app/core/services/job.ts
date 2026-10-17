import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api';
import { JobDescription } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private readonly endpoint = 'jobs';

  constructor(private api: ApiService) {}

  getAll(): Observable<JobDescription[]> {
    return this.api.get<JobDescription[]>(this.endpoint);
  }

  getById(id: string): Observable<JobDescription> {
    return this.api.get<JobDescription>(`${this.endpoint}/${id}`);
  }

  create(job: JobDescription): Observable<JobDescription> {
    return this.api.post<JobDescription>(this.endpoint, job);
  }

  update(id: string, job: JobDescription): Observable<JobDescription> {
    return this.api.put<JobDescription>(`${this.endpoint}/${id}`, job);
  }

  delete(id: string): Observable<void> {
    return this.api.delete<void>(`${this.endpoint}/${id}`);
  }
}