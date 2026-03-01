/* eslint-disable no-unused-vars */
import { create } from "zustand";
import { jobService } from "../api/jobService";

export const useJobStore = create((set) => ({
  jobs: [],
  selectedJob: null,
  loading: false,
  error: null,

  fetchJobs: async () => {
    try {
      set({ loading: true, error: null });

      const res = await jobService.getAll();

      set({ jobs: res.data, loading: false });
    } catch (err) {
      set({ error: "Failed to fetch jobs", loading: false });
    }
  },

  fetchJobById: async (id) => {
    try {
      set({ loading: true });

      const res = await jobService.getById(id);

      set({ selectedJob: res.data, loading: false });
    } catch (err) {
      set({ error: "Failed to fetch job", loading: false });
    }
  },
}));