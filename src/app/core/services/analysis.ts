import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api';
import { AnalysisResult } from '../models/analysis.model';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {
  private readonly endpoint = 'analyses';

  constructor(private api: ApiService) {}

  getAll(): Observable<AnalysisResult[]> {
    return this.api.get<AnalysisResult[]>(this.endpoint);
  }

  getById(id: string): Observable<AnalysisResult> {
    return this.api.get<AnalysisResult>(`${this.endpoint}/${id}`);
  }

  analyze(resumeId: string, jobDescriptionId: string): Observable<AnalysisResult> {
    return this.api.post<AnalysisResult>(this.endpoint, {
      resumeId,
      jobDescriptionId
    });
  }
}