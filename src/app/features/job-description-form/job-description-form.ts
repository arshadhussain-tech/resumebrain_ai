import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-job-description-form',
  imports: [FormsModule, RouterLink],
  templateUrl: './job-description-form.html',
  styleUrl: './job-description-form.css'
})
export class JobDescriptionForm {

  job = {
    title: '',
    company: '',
    location: '',
    experience: '',
    description: '',
    skills: ''
  };

  saveJob(): void {
    if (
      !this.job.title ||
      !this.job.company ||
      !this.job.description
    ) {
      alert('Please fill in the required fields.');
      return;
    }

    alert('Job description is ready to be saved.');

    // Spring Boot API integration will be added later.
  }
}