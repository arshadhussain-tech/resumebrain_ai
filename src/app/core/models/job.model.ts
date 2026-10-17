
export interface JobDescription {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  requiredSkills: string[];
  experienceRequired: string;
  employmentType: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  createdDate: string;
  status: 'Active' | 'Archived';
}