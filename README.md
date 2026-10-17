# ResumeBrain — AI Resume Intelligence

ResumeBrain is an AI-powered resume analysis and job-matching application designed to help users understand how well their resumes align with job descriptions. The project aims to make resume analysis easier through structured insights, skill matching, and resume-to-job compatibility scoring.

## Features

- **Dashboard:** View resume analysis information and key metrics.
- **Resume Management:** Browse and manage resume records.
- **Resume Upload:** Upload supported resume files, including PDF, DOC, DOCX, and TXT.
- **Job Description Management:** Create and manage job descriptions.
- **Resume Analysis:** Analyze resume-to-job compatibility.
- **Analysis Results:** View analysis results and matching scores.
- **Analysis History:** Access previous analysis records.
- **Authentication UI:** Login and registration interfaces.
- **Responsive Design:** Layouts designed for desktop and mobile screens.
- **Reusable Components:** Shared UI components for file uploads, score cards, and notifications.

> Note: The current frontend includes UI and mock data for the application workflows. Backend authentication, persistent storage, and AI-powered analysis will be integrated as development progresses.

## Technology Stack

### Frontend

- Angular 20
- TypeScript
- HTML5 and CSS3
- Angular Router
- Angular Forms
- Angular Material

### Planned Backend and Data Layer

- Java
- Spring Boot
- PostgreSQL
- AI/NLP-based resume analysis and matching

## Prerequisites

Install the following tools before running the application:

- [Node.js](https://nodejs.org/)
- npm, which is included with Node.js
- Angular CLI 20

Check the installed versions:

```bash
node --version
npm --version
ng version
```

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
```

Replace `<repository-url>` with the actual Git repository URL.

### 2. Navigate to the project directory

```bash
cd resumatch-ui
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
ng serve
```

Open [http://localhost:4200](http://localhost:4200) in your browser.

The development server automatically reloads when source files change.

## Available Routes

| Route | Description |
|---|---|
| `/dashboard` | Application dashboard |
| `/login` | Login page |
| `/register` | Registration page |
| `/resumes` | Resume management |
| `/resumes/upload` | Resume upload |
| `/jobs` | Job description management |
| `/jobs/create` | Create a job description |
| `/analyze` | Resume analysis |
| `/analysis/:id` | Analysis result details |
| `/history` | Analysis history |

## Project Structure

```text
src/
└── app/
    ├── core/
    │   ├── models/
    │   └── services/
    ├── features/
    │   ├── login/
    │   ├── register/
    │   ├── dashboard/
    │   ├── resumes/
    │   ├── resume-upload/
    │   ├── job-descriptions/
    │   ├── job-description-form/
    │   ├── analyze/
    │   ├── analysis-result/
    │   └── analysis-history/
    ├── layouts/
    │   ├── main-layout/
    │   └── auth-layout/
    └── shared/
        └── components/
            ├── navbar/
            ├── sidebar/
            ├── score-card/
            └── file-upload/
```

## Development Commands

### Generate a component

```bash
ng generate component component-name
```

### Build the application

```bash
ng build
```

The build output is written to the `dist/` directory.

### Run unit tests

```bash
ng test
```

### Explore Angular CLI commands

```bash
ng generate --help
```

## Development Roadmap

- [x] Angular application structure and routing
- [x] Responsive application layouts
- [x] Resume upload interface and file validation
- [x] Reusable UI components
- [x] Notification service
- [x] ResumeBrain branding
- [ ] Complete TypeScript data models
- [ ] Spring Boot REST API integration
- [ ] PostgreSQL persistence
- [ ] Backend authentication and authorization
- [ ] AI/NLP resume parsing and job matching
- [ ] Automated testing and end-to-end validation

## Contributing

1. Create a branch for the change.
2. Implement and test the changes.
3. Submit a pull request with a clear description.

## License

A license has not yet been specified. Add a license file before distributing the project under specific reuse terms.