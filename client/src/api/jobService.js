import axiosInstance from "./axiosInstance";
import { endpoints } from "./endpoints";

export const jobService = {
  getAll: () => axiosInstance.get(endpoints.jobs),
  getFeaturedJob: () => axiosInstance.get(endpoints.featuredJob),
   getLatestJob: () => axiosInstance.get(endpoints.latestJob),
   getJobCategory: () => axiosInstance.get(endpoints.jobCategory),
  getById: (id) => axiosInstance.get(endpoints.jobById(id)),
  create: (data) => axiosInstance.post(endpoints.jobs, data),
  delete: (id) => axiosInstance.delete(endpoints.jobById(id)),
};
