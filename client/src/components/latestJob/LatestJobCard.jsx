import Icon from "../../assets/images/featuredJob/designerIcon.svg"
export default function LatestJobCard({ job }) {
  return (
    <div className="bg-white p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center gap-5 card-shadow border border-transparent hover:border-primary/20 transition-all duration-300">
      {/* Company Logo */}
      <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
        <img
          alt={job.company}
          className="w-8 h-8 object-contain"
          src={Icon} // fallback if logo is empty
        />
      </div>

      {/* Job Info */}
      <div className="flex-1">
        <h3 className="font-semibold text-base sm:text-lg text-[#25324B]">
          {job.title}
        </h3>

        <p className="text-gray-400 text-sm mt-1">
          {job.company} • {job.location}
        </p>

        {/* Tags Row */}
        <div className="flex flex-wrap items-center gap-3 mt-3">
          {/* Job Type */}
          <span className="text-[#56CDAD] text-sm font-medium pr-3 border-r border-[#D6DDEB]">
            {job.type}
          </span>

          {/* Category Tags */}
          <span className="px-3 py-1 border border-yellow-200 text-yellow-600 text-xs font-semibold rounded-full">
            {job.category}
          </span>
        </div>
      </div>
    </div>
  );
}