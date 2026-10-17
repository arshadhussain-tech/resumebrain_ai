import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analyze',
  imports: [FormsModule],
  templateUrl: './analyze.html',
  styleUrl: './analyze.css'
})
export class Analyze {

  selectedResume = '';
  selectedJob = '';
  isAnalyzing = false;

  resumes = [
    {
      id: '1',
      name: 'Arshad_Hussain_Resume.pdf',
      type: 'PDF'
    },
    {
      id: '2',
      name: 'Arshad_Hussain_Java_Developer.docx',
      type: 'DOCX'
    },
    {
      id: '3',
      name: 'Arshad_Hussain_FullStack.pdf',
      type: 'PDF'
    }
  ];

  jobs = [
    {
      id: '1',
      title: 'Java Full Stack Developer',
      company: 'ABC Technologies',
      location: 'Bangalore'
    },
    {
      id: '2',
      title: 'Backend Engineer',
      company: 'Tech Solutions',
      location: 'Hyderabad'
    },
    {
      id: '3',
      title: 'Senior Java Developer',
      company: 'FinTech Corp',
      location: 'Pune'
    },
    {
      id: '4',
      title: 'Software Engineer',
      company: 'Cloud Systems',
      location: 'Remote'
    }
  ];

  constructor(private router: Router) { }

  get canAnalyze(): boolean {
    return !!this.selectedResume && !!this.selectedJob;
  }

  analyzeResume(): void {

    if (!this.canAnalyze) {
      return;
    }

    this.isAnalyzing = true;

    // Temporary mock analysis.
    // This will be replaced with the Spring Boot API call.

    setTimeout(() => {
      this.isAnalyzing = false;
      this.router.navigate(['/analysis', 'demo-001']);
    }, 1500);
  }

  getResumeName(): string {
    const resume = this.resumes.find(
      resume => resume.id === this.selectedResume
    );

    return resume?.name ?? '';
  }

  getJobTitle(): string {
    const job = this.jobs.find(
      job => job.id === this.selectedJob
    );

    return job?.title ?? '';
  }
}