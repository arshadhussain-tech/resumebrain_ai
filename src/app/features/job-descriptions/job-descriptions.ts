import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { JobDescription } from '../../core/models/job.model';

@Component({
  selector: 'app-job-descriptions',
  imports: [RouterLink, FormsModule],
  templateUrl: './job-descriptions.html',
  styleUrl: './job-descriptions.css'
})
export class JobDescriptions {

  searchTerm = '';

  jobs: JobDescription[] = [
    {
      id: 'job-001',
      title: 'Java Full Stack Developer',
      company: 'ABC Technologies',
      location: 'Bangalore',
      description: 'Develop and maintain Java full-stack applications.',
      requiredSkills: ['Java', 'Spring Boot', 'Angular', 'AWS'],
      experienceRequired: '3-5 years',
      employmentType: 'Full-time',
      createdDate: 'Sep 26, 2026',
      status: 'Active'
    },
    {
      id: 'job-002',
      title: 'Backend Engineer',
      company: 'Tech Solutions',
      location: 'Hyderabad',
      description: 'Build backend services and microservices.',
      requiredSkills: ['Java', 'Spring Boot', 'Microservices', 'PostgreSQL'],
      experienceRequired: '3-6 years',
      employmentType: 'Full-time',
      createdDate: 'Sep 22, 2026',
      status: 'Active'
    },
    {
      id: 'job-003',
      title: 'Senior Java Developer',
      company: 'FinTech Corp',
      location: 'Pune',
      description: 'Design and develop enterprise Java applications.',
      requiredSkills: ['Java', 'Spring Boot', 'Kafka', 'AWS'],
      experienceRequired: '5-8 years',
      employmentType: 'Full-time',
      createdDate: 'Sep 18, 2026',
      status: 'Active'
    },
    {
      id: 'job-004',
      title: 'Software Engineer',
      company: 'Cloud Systems',
      location: 'Remote',
      description: 'Develop software solutions for cloud-based systems.',
      requiredSkills: ['Java', 'REST API', 'Docker', 'SQL'],
      experienceRequired: '2-4 years',
      employmentType: 'Contract',
      createdDate: 'Sep 15, 2026',
      status: 'Archived'
    }
  ];

  get filteredJobs(): JobDescription[] {
    const term = this.searchTerm.toLowerCase().trim();

    if (!term) {
      return this.jobs;
    }

    return this.jobs.filter(job =>
      job.title.toLowerCase().includes(term) ||
      job.company.toLowerCase().includes(term) ||
      job.requiredSkills.some(skill =>
        skill.toLowerCase().includes(term)
      )
    );
  }
}
