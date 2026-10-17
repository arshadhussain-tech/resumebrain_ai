import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { JobService } from '../../core/services/job';
import { NotificationService } from '../../core/services/notification.service';
import { JobDescription } from '../../core/models/job.model';

@Component({
  selector: 'app-job-description-form',
  imports: [FormsModule, RouterLink],
  templateUrl: './job-description-form.html',
  styleUrl: './job-description-form.css'
})
export class JobDescriptionForm {
  isSaving = false;

  job = {
    title: '',
    company: '',
    location: '',
    experience: '',
    description: '',
    skills: ''
  };

  constructor(
    private jobService: JobService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  saveJob(): void {
    if (
      !this.job.title.trim() ||
      !this.job.company.trim() ||
      !this.job.description.trim()
    ) {
      this.notificationService.warning(
        'Please fill in the required fields.'
      );
      return;
    }

    if (this.isSaving) {
      return;
    }

    const newJob: JobDescription = {
      id: '',
      title: this.job.title.trim(),
      company: this.job.company.trim(),
      location: this.job.location.trim(),
      description: this.job.description.trim(),
      requiredSkills: this.job.skills
        .split(',')
        .map(skill => skill.trim())
        .filter(skill => skill.length > 0),
      experienceRequired: this.job.experience.trim(),
      employmentType: 'Full-time',
      createdDate: new Date().toISOString().split('T')[0],
      status: 'Active'
    };

    this.isSaving = true;

    this.jobService.create(newJob).subscribe({
      next: () => {
        this.isSaving = false;
        this.notificationService.success(
          'Job description created successfully.'
        );
        void this.router.navigate(['/jobs']);
      },
      error: () => {
        this.isSaving = false;
        this.notificationService.error(
          'Could not save the job description. Please try again.'
        );
      }
    });
  }
}