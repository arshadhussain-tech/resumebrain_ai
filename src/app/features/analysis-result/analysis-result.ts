import { Component } from '@angular/core';
import { ScoreCard } from '../../shared/components/score-card/score-card';

@Component({
  selector: 'app-analysis-result',
  imports: [ScoreCard],
  templateUrl: './analysis-result.html',
  styleUrl: './analysis-result.css'
})
export class AnalysisResult {
  analysis = {
    id: 'demo-001',
    resumeName: 'Arshad_Hussain_Resume.pdf',
    jobTitle: 'Java Full Stack Developer',
    company: 'ABC Technologies',
    analyzedDate: 'Sep 26, 2026',
    overallScore: 82,

    scores: [
      {
        name: 'Semantic Similarity',
        score: 86,
        weight: 35,
        description: 'Resume content closely matches the job requirements.'
      },
      {
        name: 'Skill Match',
        score: 91,
        weight: 25,
        description: 'Strong match across the required technical skills.'
      },
      {
        name: 'Experience Match',
        score: 80,
        weight: 15,
        description: 'Professional experience aligns well with the position.'
      },
      {
        name: 'Education Match',
        score: 90,
        weight: 10,
        description: 'Educational background meets the requirements.'
      },
      {
        name: 'Keyword Match',
        score: 74,
        weight: 15,
        description: 'Several important keywords are present in the resume.'
      }
    ],

    matchedSkills: [
      'Java',
      'Spring Boot',
      'Microservices',
      'REST API',
      'PostgreSQL',
      'AWS',
      'Git',
      'JUnit'
    ],

    missingSkills: [
      'Docker',
      'Kubernetes',
      'Kafka'
    ],

    strengths: [
      'Strong Java and Spring Boot experience',
      'Good microservices development experience',
      'Relevant cloud and AWS knowledge',
      'Strong backend development background'
    ],

    improvements: [
      'Add Docker and Kubernetes experience if applicable',
      'Highlight Kafka or event-driven architecture experience',
      'Add measurable impact to major project achievements',
      'Include more job-specific keywords'
    ]
  };
}