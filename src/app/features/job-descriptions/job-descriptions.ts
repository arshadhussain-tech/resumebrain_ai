import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-job-descriptions',
  imports: [RouterLink, FormsModule],
  templateUrl: './job-descriptions.html',
  styleUrl: './job-descriptions.css'
})
export class JobDescriptions {

  searchTerm = '';

  jobs = [
    {
      title: 'Java Full Stack Developer',
      company: 'ABC Technologies',
      location: 'Bangalore',
      experience: '3-5 years',
      skills: ['Java', 'Spring Boot', 'Angular', 'AWS'],
      createdDate: 'Sep 26, 2026',
      status: 'Active'
    },
    {
      title: 'Backend Engineer',
      company: 'Tech Solutions',
      location: 'Hyderabad',
      experience: '3-6 years',
      skills: ['Java', 'Spring Boot', 'Microservices', 'PostgreSQL'],
      createdDate: 'Sep 22, 2026',
      status: 'Active'
    },
    {
      title: 'Senior Java Developer',
      company: 'FinTech Corp',
      location: 'Pune',
      experience: '5-8 years',
      skills: ['Java', 'Spring Boot', 'Kafka', 'AWS'],
      createdDate: 'Sep 18, 2026',
      status: 'Active'
    },
    {
      title: 'Software Engineer',
      company: 'Cloud Systems',
      location: 'Remote',
      experience: '2-4 years',
      skills: ['Java', 'REST API', 'Docker', 'SQL'],
      createdDate: 'Sep 15, 2026',
      status: 'Archived'
    }
  ];

  get filteredJobs() {
    const term = this.searchTerm.toLowerCase().trim();

    if (!term) {
      return this.jobs;
    }

    return this.jobs.filter(job =>
      job.title.toLowerCase().includes(term) ||
      job.company.toLowerCase().includes(term) ||
      job.skills.some(skill =>
        skill.toLowerCase().includes(term)
      )
    );
  }
}