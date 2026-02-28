import Revolut from "../../assets/images/featuredJob/CompanyLogo.svg";
import RightArrow from "../../assets/RightArrowIcon.svg";
import FeaturedJobCard from "./FeaturedJobCard";
export default function FeaturedJob() {
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

          <FeaturedJobCard
            icon={Revolut}
            title="Email Marketing"
            company="Revolut"
            location="Madrid, Spain"
            description="Revolut is looking for Email Marketing..."
            type="Full Time"
            tags={[
              { label: "Marketing", color: "yellow" },
              { label: "Design", color: "green" },
            ]}
          />
          <FeaturedJobCard
            icon={Revolut}
            title="Email Marketing"
            company="Revolut"
            location="Madrid, Spain"
            description="Revolut is looking for Email Marketing..."
            type="Full Time"
            tags={[
              { label: "Marketing", color: "yellow" },
              { label: "Design", color: "green" },
            ]}
          />
          <FeaturedJobCard
            icon={Revolut}
            title="Email Marketing"
            company="Revolut"
            location="Madrid, Spain"
            description="Revolut is looking for Email Marketing..."
            type="Full Time"
            tags={[
              { label: "Marketing", color: "yellow" },
              { label: "Design", color: "green" },
            ]}
          />
          <FeaturedJobCard
            icon={Revolut}
            title="Email Marketing"
            company="Revolut"
            location="Madrid, Spain"
            description="Revolut is looking for Email Marketing..."
            type="Full Time"
            tags={[
              { label: "Marketing", color: "yellow" },
              { label: "Design", color: "green" },
            ]}
          />
          <FeaturedJobCard
            icon={Revolut}
            title="Email Marketing"
            company="Revolut"
            location="Madrid, Spain"
            description="Revolut is looking for Email Marketing..."
            type="Full Time"
            tags={[
              { label: "Marketing", color: "yellow" },
              { label: "Design", color: "green" },
            ]}
          />
          <FeaturedJobCard
            icon={Revolut}
            title="Email Marketing"
            company="Revolut"
            location="Madrid, Spain"
            description="Revolut is looking for Email Marketing..."
            type="Full Time"
            tags={[
              { label: "Marketing", color: "yellow" },
              { label: "Design", color: "green" },
            ]}
          />
          <FeaturedJobCard
            icon={Revolut}
            title="Email Marketing"
            company="Revolut"
            location="Madrid, Spain"
            description="Revolut is looking for Email Marketing..."
            type="Full Time"
            tags={[
              { label: "Marketing", color: "yellow" },
              { label: "Design", color: "green" },
            ]}
          />
          <FeaturedJobCard
            icon={Revolut}
            title="Email Marketing"
            company="Revolut"
            location="Madrid, Spain"
            description="Revolut is looking for Email Marketing..."
            type="Full Time"
            tags={[
              { label: "Marketing", color: "yellow" },
              { label: "Design", color: "green" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
