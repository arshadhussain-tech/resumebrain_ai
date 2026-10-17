import { Routes } from '@angular/router';

import { MainLayout } from './layouts/main-layout/main-layout';
import { AuthLayout } from './layouts/auth-layout/auth-layout';

import { Dashboard } from './features/dashboard/dashboard';
import { Resumes } from './features/resumes/resumes';
import { ResumeUpload } from './features/resume-upload/resume-upload';
import { JobDescriptions } from './features/job-descriptions/job-descriptions';
import { JobDescriptionForm } from './features/job-description-form/job-description-form';
import { Analyze } from './features/analyze/analyze';
import { AnalysisResult } from './features/analysis-result/analysis-result';
import { AnalysisHistory } from './features/analysis-history/analysis-history';

import { Login } from './features/login/login';
import { Register } from './features/register/register';

export const routes: Routes = [

  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: Dashboard
      },
      {
        path: 'resumes',
        component: Resumes
      },
      {
        path: 'resumes/upload',
        component: ResumeUpload
      },
      {
        path: 'jobs',
        component: JobDescriptions
      },
      {
        path: 'jobs/create',
        component: JobDescriptionForm
      },
      {
        path: 'analyze',
        component: Analyze
      },
      {
        path: 'analysis/:id',
        component: AnalysisResult
      },
      {
        path: 'history',
        component: AnalysisHistory
      }
    ]
  },

  {
    path: '',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        component: Login
      },
      {
        path: 'register',
        component: Register
      }
    ]
  },

  {
    path: '**',
    redirectTo: 'dashboard'
  }

];