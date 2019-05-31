# Serverless API
A REST API for university assessment app using Azure Functions.

## Endpoints

### Competencies API
| Method | URL                                          |
|--------|----------------------------------------------|
| GET    | /api/competencies                            |
| POST   | /api/competencies                            |
| PUT    | /api/competencies/${competencyId}            |
| DELETE | /api/competencies/${competencyId}            |

### Assessment Profiles API
| Method | URL                                          |
|--------|----------------------------------------------|
| GET    | /api/assessment-profiles                     |
| POST   | /api/assessment-profiles                     |
| PUT    | /api/assessment-profiles/${profileId}        |
| DELETE | /api/assessment-profiles/${profileId}        |

### Assessments API
| Method | URL                                          |
|--------|----------------------------------------------|
| GET    | /api/assessments/${assessmentId}             |
| GET    | /api/assessments?username=${username}        |
| GET    | /api/assessments?respondent=${username}      |
| POST   | /api/assessments                             |
| DELETE | /api/assessments/${assessmentId}             |

### Assessment Results API
| Method | URL                                          |
|--------|----------------------------------------------|
| GET    | /api/assessment-results?username=${username} |
| GET    | /api/assessment-results/${assessmentId}      |
| PUT    | /api/assessment-results/${assessmentId}      |