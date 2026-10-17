import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Resume } from '../../core/models/resume.model';

@Component({
  selector: 'app-resumes',
  imports: [RouterLink],
  templateUrl: './resumes.html',
  styleUrl: './resumes.css'
})
export class Resumes {

  resumes: Resume[] = [
    {
      id: 'resume-001',
      name: 'Arshad_Hussain_Resume.pdf',
      type: 'PDF',
      size: '245 KB',
      uploadedDate: 'Sep 26, 2026',
      status: 'Active'
    },
    {
      id: 'resume-002',
      name: 'Arshad_Hussain_Java_Developer.docx',
      type: 'DOCX',
      size: '182 KB',
      uploadedDate: 'Sep 20, 2026',
      status: 'Active'
    },
    {
      id: 'resume-003',
      name: 'Arshad_Hussain_FullStack.pdf',
      type: 'PDF',
      size: '310 KB',
      uploadedDate: 'Sep 12, 2026',
      status: 'Archived'
    }
  ];

}
