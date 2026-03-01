import { useEffect } from "react";
import RightArrow from "../../assets/RightArrowIcon.svg";
import { useJobStore } from "../../store/job/featuredJobStore";
import LatestJobCardSkeleton from "../skeleton/LatestJobCardSkeleton";
import LatestJobCard from "./LatestJobCard";

export default function LatestJob() {
  const jobs = useJobStore((state) => state.jobs);
  const loading = useJobStore((state) => state.loading);
  const featuredJobs = useJobStore((state) => state.featuredJobs);

  useEffect(() => {
    featuredJobs();
  }, []);
  return (
    <section className="bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Latest <span className="text-primary">jobs open</span>
          </h2>

          <a
            href="#"
            className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all"
          >
            Show all jobs
            <img src={RightArrow} alt="arrow" className="w-4 h-4" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {loading ? (
            <>
              <LatestJobCardSkeleton />
              <LatestJobCardSkeleton />
              <LatestJobCardSkeleton />
              <LatestJobCardSkeleton />
            </>
          ) : (
            jobs?.map((job) => <LatestJobCard key={job._id} job={job} />)
          )}
        </div>
      </div>
    </section>
  );
}
