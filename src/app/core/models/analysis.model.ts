export interface AnalysisScore {
  name: string;
  score: number;
  weight: number;
  description: string;
}

export interface AnalysisResult {
  id: string;
  resumeId: string;
  jobDescriptionId: string;
  resumeName: string;
  jobTitle: string;
  company: string;
  matchScore: number;
  scores: AnalysisScore[];
  matchedSkills: string[];
  missingSkills: string[];
  strengths: string[];
  improvements: string[];
  recommendations: string[];
  summary: string;
  analyzedDate: string;
  status: 'Completed' | 'In Progress' | 'Failed';
}
