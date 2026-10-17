
export interface AnalysisResult {
  id: string;
  resumeId: string;
  jobDescriptionId: string;
  matchScore: number;
  matchedSkills: string[];
  missingSkills: string[];
  recommendations: string[];
  summary: string;
  analyzedDate: string;
  status: 'Completed' | 'In Progress' | 'Failed';
}