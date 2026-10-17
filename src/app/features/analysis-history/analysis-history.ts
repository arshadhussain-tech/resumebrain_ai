import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-analysis-history',
  imports: [RouterLink, FormsModule],
  templateUrl: './analysis-history.html',
  styleUrl: './analysis-history.css'
})
export class AnalysisHistory {

  searchTerm = '';
  selectedFilter = 'all';

  analyses = [
    {
      id: 'demo-001',
      resumeName: 'Arshad_Hussain_Resume.pdf',
      jobTitle: 'Java Full Stack Developer',
      company: 'ABC Technologies',
      score: 82,
      analyzedDate: 'Sep 26, 2026',
      status: 'Completed'
    },
    {
      id: 'demo-002',
      resumeName: 'Arshad_Hussain_Java_Developer.docx',
      jobTitle: 'Backend Engineer',
      company: 'Tech Solutions',
      score: 76,
      analyzedDate: 'Sep 24, 2026',
      status: 'Completed'
    },
    {
      id: 'demo-003',
      resumeName: 'Arshad_Hussain_FullStack.pdf',
      jobTitle: 'Senior Java Developer',
      company: 'FinTech Corp',
      score: 91,
      analyzedDate: 'Sep 20, 2026',
      status: 'Completed'
    },
    {
      id: 'demo-004',
      resumeName: 'Arshad_Hussain_Resume.pdf',
      jobTitle: 'Spring Boot Developer',
      company: 'Cloud Systems',
      score: 74,
      analyzedDate: 'Sep 18, 2026',
      status: 'Completed'
    },
    {
      id: 'demo-005',
      resumeName: 'Arshad_Hussain_Java_Developer.docx',
      jobTitle: 'Software Engineer',
      company: 'Global Tech',
      score: 68,
      analyzedDate: 'Sep 15, 2026',
      status: 'Completed'
    }
  ];

  get filteredAnalyses() {
    const term = this.searchTerm.toLowerCase().trim();

    return this.analyses.filter(analysis => {

      const matchesSearch =
        !term ||
        analysis.jobTitle.toLowerCase().includes(term) ||
        analysis.company.toLowerCase().includes(term) ||
        analysis.resumeName.toLowerCase().includes(term);

      const matchesFilter =
        this.selectedFilter === 'all' ||
        this.getScoreCategory(analysis.score) === this.selectedFilter;

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