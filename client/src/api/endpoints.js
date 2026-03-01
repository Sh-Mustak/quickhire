const BASE_URL = import.meta.env.VITE_API_URL;

export const endpoints = {
    // Jobs
    jobs: `/jobs`,
    jobById: (id) => `/jobs/${id}`,
    jobCategory: `/jobs/categories`,
    featuredJob: `/jobs?limit=8`,
    latestJob: `/jobs?limit=10`,

    // Applications
    applications: `/applications`,
    applicationsById: (jobId) => `/applications/jobs/${jobId}`,

    // Health
    health: `/health`,
}