/* eslint-disable no-unused-vars */
import { create } from "zustand";
import { jobService } from "../../api/jobService";

export const useJobStore = create((set) => ({
  Jobs: [],
  selectedJob: null,
  loading: false,
  error: null,

  featuredJobs: async () => {
    try {
      set({ loading: true, error: null });

      const res = await jobService.getFeaturedJob();

      set({ jobs: res.data.data, loading: false });
    } catch (err) {
      set({ error: "Failed to fetch jobs", loading: false });
    }
  },
}));
