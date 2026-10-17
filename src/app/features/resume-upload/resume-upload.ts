import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FileUpload } from '../../shared/components/file-upload/file-upload';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-resume-upload',
  imports: [RouterLink, FileUpload],
  templateUrl: './resume-upload.html',
  styleUrl: './resume-upload.css'
})
export class ResumeUpload {
  selectedFile: File | null = null;

  constructor(
    private notificationService: NotificationService
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

    this.notificationService.success(
      `"${this.selectedFile.name}" is ready for upload.`
    );

    // Backend API integration later.
  }
}