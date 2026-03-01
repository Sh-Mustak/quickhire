import { useJobStore } from "../../store/job/categoryJobstore";
import JobCard from "./JobCard";
import SectionHeader from "./SectionHeader";
import {useEffect} from "react"

export default function JobCategory() {
  const jobs = useJobStore((state) => state.jobs);
  const loading = useJobStore((state) => state.loading);
  const categoryJobs = useJobStore((state) => state.categoryJobs);
  useEffect(()=>{
    categoryJobs();
  },[])
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* <!-- Category Card --> */}
          {jobs?.map((job) => (
            <JobCard key={job._id} title={job._id} jobsAvailable={job?.count} />
          ))}
        </div>
      </div>
    </section>
  );
}
