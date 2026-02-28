export default function LatestJobCard() {
  return (
    <div className="bg-white p-6 rounded-2xl flex items-center gap-6 card-shadow border border-transparent hover:border-primary/20 transition-all">
      <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
        <img
          alt="Nomad"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_JSfu99QJkMDHlvDIzqxGacyxLKgwmNhVa9YPPGuPoWSpddytpyGohg9UmAveDr85JLzKEauMEhAYKFjTh-9c2AT3VyR7m74JgLTYTfTCXBTT1gumHo_2oprdN-zw78ILst4Rqor6BD25OeH3LgAbYXcdwgSle0OrhDPXixlu6ZBUDNgPwoBKolJymo7c1FU5gtWJyeqGxqepLtKivXymX1NRUWVJt1aMotKRh1FxAWqOLxlWD6F0YSOrP3bOdgNwR_9wz78O_d8L"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-lg text-[#25324B]">
          Social Media Assistant
        </h3>
        <p className="text-gray-400 text-sm">Nomad • Paris, France</p>
        <div className="flex gap-2 mt-2">
          <span className="px-3 py-0.5 p-4  text-[#56CDAD] text-[20px]   border-r-1 border-[#D6DDEB]">
            Full-Time
          </span>
          <span className="px-3 py-1 border border-yellow-200 text-yellow-600 text-xs  rounded-full flex items-center justify-center">
            Marketing
          </span>

          <span className="px-3 py-1 border border-indigo-200 text-indigo-600 text-xs  rounded-full flex items-center justify-center">
            Design
          </span>
        </div>
      </div>
    </div>
  );
}
