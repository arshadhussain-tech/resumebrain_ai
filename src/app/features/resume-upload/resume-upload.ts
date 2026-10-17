import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FileUpload } from '../../shared/components/file-upload/file-upload';
import { NotificationService } from '../../core/services/notification.service';
import { ResumeService } from '../../core/services/resume';

@Component({
  selector: 'app-resume-upload',
  imports: [RouterLink, FileUpload],
  templateUrl: './resume-upload.html',
  styleUrl: './resume-upload.css'
})
export class ResumeUpload {
  selectedFile: File | null = null;
  isUploading = false;

  constructor(
    private resumeService: ResumeService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  onFileSelected(file: File): void {
    this.selectedFile = file;

    this.notificationService.success(
      `"${file.name}" selected successfully.`
    );
  }

  onFileRemoved(): void {
    this.selectedFile = null;

    this.notificationService.info(
      'Selected resume removed.'
    );
  }

  uploadResume(): void {
    if (!this.selectedFile) {
      this.notificationService.warning(
        'Please select a resume first.'
      );
      return;
    }

    if (this.isUploading) {
      return;
    }

    this.isUploading = true;

    this.resumeService.upload(this.selectedFile).subscribe({
      next: () => {
        this.isUploading = false;

        this.notificationService.success(
          'Resume uploaded successfully.'
        );

        void this.router.navigate(['/resumes']);
      },
      error: () => {
        this.isUploading = false;

        this.notificationService.error(
          'Resume upload failed. Please try again.'
        );
      }
    });
  }
}