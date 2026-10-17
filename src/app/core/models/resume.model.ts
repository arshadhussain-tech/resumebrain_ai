
export interface Resume {
  id: string;
  name: string;
  type: string;
  size: string;
  uploadedDate: string;
  status: 'Active' | 'Archived';
}

export interface ResumeFile {
  file: File;
  name: string;
  type: string;
  size: number;
}