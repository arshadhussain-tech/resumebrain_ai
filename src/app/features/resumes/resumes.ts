import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Resume } from '../../core/models/resume.model';
import { ResumeService } from '../../core/services/resume';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-resumes',
  imports: [RouterLink],
  templateUrl: './resumes.html',
  styleUrl: './resumes.css'
})
export class Resumes implements OnInit {
  resumes: Resume[] = [
    {
      id: 'resume-001',
      name: 'Arshad_Hussain_Resume.pdf',
      type: 'PDF',
      size: '245 KB',
      uploadedDate: 'Sep 26, 2026',
      status: 'Active'
    },
    {
      id: 'resume-002',
      name: 'Arshad_Hussain_Java_Developer.docx',
      type: 'DOCX',
      size: '182 KB',
      uploadedDate: 'Sep 20, 2026',
      status: 'Active'
    },
    {
      id: 'resume-003',
      name: 'Arshad_Hussain_FullStack.pdf',
      type: 'PDF',
      size: '310 KB',
      uploadedDate: 'Sep 12, 2026',
      status: 'Archived'
    }
  ];

  constructor(
    private resumeService: ResumeService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.loadResumes();
  }

  loadResumes(): void {
    this.resumeService.getAll().subscribe({
      next: (resumes) => {
        this.resumes = resumes;
      },
      error: () => {
        this.notificationService.warning(
          'Could not load resumes from the server. Showing demo data.'
        );
      }
    });
  }
}