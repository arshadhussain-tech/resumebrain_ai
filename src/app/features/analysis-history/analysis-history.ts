import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AnalysisService } from '../../core/services/analysis';
import { AnalysisResult as AnalysisResultModel } from '../../core/models/analysis.model';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-analysis-history',
  imports: [RouterLink, FormsModule],
  templateUrl: './analysis-history.html',
  styleUrl: './analysis-history.css'
})
export class AnalysisHistory implements OnInit {
  searchTerm = '';
  selectedFilter = 'all';

  analyses: AnalysisResultModel[] = [
    {
      id: 'demo-001',
      resumeId: 'resume-001',
      jobDescriptionId: 'job-001',
      resumeName: 'Arshad_Hussain_Resume.pdf',
      jobTitle: 'Java Full Stack Developer',
      company: 'ABC Technologies',
      matchScore: 82,
      analyzedDate: 'Sep 26, 2026',
      status: 'Completed',
      summary: 'The resume shows a strong match for the target role.',
      scores: [],
      matchedSkills: [],
      missingSkills: [],
      strengths: [],
      improvements: [],
      recommendations: []
    },
    {
      id: 'demo-002',
      resumeId: 'resume-002',
      jobDescriptionId: 'job-002',
      resumeName: 'Arshad_Hussain_Java_Developer.docx',
      jobTitle: 'Backend Engineer',
      company: 'Tech Solutions',
      matchScore: 76,
      analyzedDate: 'Sep 24, 2026',
      status: 'Completed',
      summary: '',
      scores: [],
      matchedSkills: [],
      missingSkills: [],
      strengths: [],
      improvements: [],
      recommendations: []
    },
    {
      id: 'demo-003',
      resumeId: 'resume-003',
      jobDescriptionId: 'job-003',
      resumeName: 'Arshad_Hussain_FullStack.pdf',
      jobTitle: 'Senior Java Developer',
      company: 'FinTech Corp',
      matchScore: 91,
      analyzedDate: 'Sep 20, 2026',
      status: 'Completed',
      summary: '',
      scores: [],
      matchedSkills: [],
      missingSkills: [],
      strengths: [],
      improvements: [],
      recommendations: []
    },
    {
      id: 'demo-004',
      resumeId: 'resume-001',
      jobDescriptionId: 'job-004',
      resumeName: 'Arshad_Hussain_Resume.pdf',
      jobTitle: 'Spring Boot Developer',
      company: 'Cloud Systems',
      matchScore: 74,
      analyzedDate: 'Sep 18, 2026',
      status: 'Completed',
      summary: '',
      scores: [],
      matchedSkills: [],
      missingSkills: [],
      strengths: [],
      improvements: [],
      recommendations: []
    },
    {
      id: 'demo-005',
      resumeId: 'resume-002',
      jobDescriptionId: 'job-005',
      resumeName: 'Arshad_Hussain_Java_Developer.docx',
      jobTitle: 'Software Engineer',
      company: 'Global Tech',
      matchScore: 68,
      analyzedDate: 'Sep 15, 2026',
      status: 'Completed',
      summary: '',
      scores: [],
      matchedSkills: [],
      missingSkills: [],
      strengths: [],
      improvements: [],
      recommendations: []
    }
  ];

  constructor(
    private analysisService: AnalysisService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.loadAnalyses();
  }

  loadAnalyses(): void {
    this.analysisService.getAll().subscribe({
      next: (analyses) => {
        this.analyses = analyses;
      },
      error: () => {
        this.notificationService.warning(
          'Could not load analysis history. Showing demo data.'
        );
      }
    });
  }

  get filteredAnalyses(): AnalysisResultModel[] {
    const term = this.searchTerm.toLowerCase().trim();

    return this.analyses.filter(analysis => {
      const matchesSearch =
        !term ||
        analysis.jobTitle.toLowerCase().includes(term) ||
        analysis.company.toLowerCase().includes(term) ||
        analysis.resumeName.toLowerCase().includes(term);

      const matchesFilter =
        this.selectedFilter === 'all' ||
        this.getScoreCategory(analysis.matchScore) === this.selectedFilter;

      return matchesSearch && matchesFilter;
    });
  }

  getScoreCategory(score: number): string {
    if (score >= 80) {
      return 'excellent';
    }

    if (score >= 60) {
      return 'good';
    }

    return 'low';
  }
}