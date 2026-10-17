import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  stats = {
    resumes: 5,
    analyses: 12,
    averageMatch: 78,
    jobDescriptions: 8
  };

  recentAnalyses = [
    {
      jobTitle: 'Java Full Stack Developer',
      company: 'ABC Technologies',
      score: 82,
      date: 'Sep 26, 2026'
    },
    {
      jobTitle: 'Backend Engineer',
      company: 'Tech Solutions',
      score: 76,
      date: 'Sep 24, 2026'
    },
    {
      jobTitle: 'Senior Java Developer',
      company: 'FinTech Corp',
      score: 91,
      date: 'Sep 20, 2026'
    },
    {
      jobTitle: 'Spring Boot Developer',
      company: 'Cloud Systems',
      score: 74,
      date: 'Sep 18, 2026'
    }
  ];

  performance = [
    {
      name: 'Semantic Similarity',
      score: 86
    },
    {
      name: 'Skill Match',
      score: 91
    },
    {
      name: 'Experience Match',
      score: 80
    },
    {
      name: 'Education Match',
      score: 90
    }
  ];

}