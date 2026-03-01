/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import Revolut from "../../assets/images/featuredJob/CompanyLogo.svg";
import RightArrow from "../../assets/RightArrowIcon.svg";
import { useJobStore } from "../../store/job/featuredJobStore";
import FeaturedJobCard from "./FeaturedJobCard";
export default function FeaturedJob() {
  const jobs = useJobStore((state) => state.jobs);
  const loading = useJobStore((state) => state.loading);
  const featuredJobs = useJobStore((state) => state.featuredJobs);

  useEffect(() => {
    featuredJobs();
  }, []);

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Featured <span className="text-accent">jobs</span>
          </h2>
          <a
            className="text-primary font-semibold flex items-center gap-2"
            href="#"
          >
            Show all jobs
            <img className="" src={RightArrow} alt="" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* <FeaturedJobCard icon={Revolut} /> */}

          {jobs?.map((job) => (
            <FeaturedJobCard
              key={job._id}
              icon={job.companyLogo || Revolut} // fallback if no logo
              title={job.title}
              company={job.company}
              location={job.location}
              description={job.description}
              type={job.type}
              tags={[
                { label: job.category, color: "yellow" }, // you can map category to a color
              ]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
