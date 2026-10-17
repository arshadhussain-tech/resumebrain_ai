import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AnalysisService } from '../../core/services/analysis';
import { ResumeService } from '../../core/services/resume';
import { JobService } from '../../core/services/job';
import { Resume } from '../../core/models/resume.model';
import { JobDescription } from '../../core/models/job.model';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-analyze',
  imports: [FormsModule],
  templateUrl: './analyze.html',
  styleUrl: './analyze.css'
})
export class Analyze implements OnInit {
  selectedResume = '';
  selectedJob = '';
  isAnalyzing = false;

  resumes: Resume[] = [];
  jobs: JobDescription[] = [];

  constructor(
    private router: Router,
    private analysisService: AnalysisService,
    private resumeService: ResumeService,
    private jobService: JobService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.loadResumes();
    this.loadJobs();
  }

  loadResumes(): void {
    this.resumeService.getAll().subscribe({
      next: (resumes) => {
        this.resumes = resumes;
      },
      error: () => {
        this.notificationService.error(
          'Could not load resumes. Please try again later.'
        );
      }
    });
  }

  loadJobs(): void {
    this.jobService.getAll().subscribe({
      next: (jobs) => {
        this.jobs = jobs;
      },
      error: () => {
        this.notificationService.error(
          'Could not load job descriptions. Please try again later.'
        );
      }
    });
  }

  get canAnalyze(): boolean {
    return !!this.selectedResume &&
      !!this.selectedJob &&
      !this.isAnalyzing;
  }

  analyzeResume(): void {
    if (!this.canAnalyze) {
      this.notificationService.warning(
        'Please select a resume and a job description.'
      );
      return;
    }

    this.isAnalyzing = true;

    this.analysisService.analyze(
      this.selectedResume,
      this.selectedJob
    ).subscribe({
      next: (result) => {
        this.isAnalyzing = false;
        this.notificationService.success(
          'Resume analysis completed successfully.'
        );
        void this.router.navigate(['/analysis', result.id]);
      },
      error: () => {
        this.isAnalyzing = false;
        this.notificationService.error(
          'Analysis failed. Please try again.'
        );
      }
    });
  }

  getResumeName(): string {
    return this.resumes.find(
      resume => resume.id === this.selectedResume
    )?.name ?? '';
  }

  getJobTitle(): string {
    return this.jobs.find(
      job => job.id === this.selectedJob
    )?.title ?? '';
  }
}