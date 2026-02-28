import JobCard from "./JobCard";
import SectionHeader from "./SectionHeader";

export default function JobCategory() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* <!-- Category Card --> */}

          <JobCard title="Design" jobsAvailable={235} />
          {/* <!-- Sales Card (Active Style Example) --> */}

          <JobCard title="Sales" jobsAvailable={756} />
          {/* <!-- Marketing (Primary Bg Example) --> */}

          <JobCard title="Marketing" jobsAvailable={140} />
          {/* <!-- Finance --> */}

          <JobCard title="Finance" jobsAvailable={325} />
          {/* <!-- Technology --> */}

          <JobCard title="Technology" jobsAvailable={436} />
          {/* <!-- Engineering --> */}
          <JobCard title="Engineering" jobsAvailable={542} />

          {/* <!-- Business --> */}
          <JobCard title="Business" jobsAvailable={211} />

          {/* <!-- Human Resource --> */}
          <JobCard title="Human Resource" jobsAvailable={346} />
        </div>
      </div>
    </section>
  );
}
