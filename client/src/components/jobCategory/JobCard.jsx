export default function JobCard({ title, jobsAvailable }) {
  return (
    <div className="group p-6 border  rounded-[2px] border-[#D6DDEB] hover:bg-primary hover:text-white transition-all duration-300 card-shadow cursor-pointer">
      <div className="w-12 h-12 bg-gray-50 text-primary flex items-center justify-center rounded-lg mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewbox="0 0 24 24"
        >
          <path
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          ></path>
        </svg>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <div className="flex justify-between items-center ">
        <span className>{jobsAvailable} jobs available</span>
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewbox="0 0 24 24"
        >
          <path
            d="M14 5l7 7m0 0l-7 7m7-7H3"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          ></path>
        </svg>
      </div>
    </div>
  );
}
