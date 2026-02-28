export default function LatestJobCard() {
  return (
    <div className="bg-white p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center gap-5 card-shadow border border-transparent hover:border-primary/20 transition-all duration-300">
      {/* Company Logo */}
      <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
        <img
          alt="Nomad"
          className="w-8 h-8 object-contain"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_JSfu99QJkMDHlvDIzqxGacyxLKgwmNhVa9YPPGuPoWSpddytpyGohg9UmAveDr85JLzKEauMEhAYKFjTh-9c2AT3VyR7m74JgLTYTfTCXBTT1gumHo_2oprdN-zw78ILst4Rqor6BD25OeH3LgAbYXcdwgSle0OrhDPXixlu6ZBUDNgPwoBKolJymo7c1FU5gtWJyeqGxqepLtKivXymX1NRUWVJt1aMotKRh1FxAWqOLxlWD6F0YSOrP3bOdgNwR_9wz78O_d8L"
        />
      </div>

      {/* Job Info */}
      <div className="flex-1">
        <h3 className="font-semibold text-base sm:text-lg text-[#25324B]">
          Social Media Assistant
        </h3>

        <p className="text-gray-400 text-sm mt-1">Nomad • Paris, France</p>

        {/* Tags Row */}
        <div className="flex flex-wrap items-center gap-3 mt-3">
          {/* Job Type */}
          <span className="text-[#56CDAD] text-sm font-medium pr-3 border-r border-[#D6DDEB]">
            Full-Time
          </span>

          {/* Category Tags */}
          <span className="px-3 py-1 border border-yellow-200 text-yellow-600 text-xs font-semibold rounded-full">
            Marketing
          </span>

          <span className="px-3 py-1 border border-indigo-200 text-indigo-600 text-xs font-semibold rounded-full">
            Design
          </span>
        </div>
      </div>
    </div>
  );
}
