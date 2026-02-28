export default function Footer() {
  return (
    <footer className="bg-[#1A1C21] text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16">

          {/* Brand — full width on mobile */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-2xl font-bold">QuickHire</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm max-w-xs">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>

          {/* About */}
          <div>
            <h4 className="text-base font-bold mb-5">About</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {["Companies", "Pricing", "Terms", "Advice", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <a className="hover:text-white transition" href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-base font-bold mb-5">Resources</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {["Help Docs", "Guide", "Updates", "Contact Us"].map((item) => (
                <li key={item}>
                  <a className="hover:text-white transition" href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter — full width on mobile */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <h4 className="text-base font-bold mb-4">Get job notifications</h4>
            <p className="text-gray-400 text-sm mb-5 max-w-xs">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 w-full">
              <input
                className="bg-white text-gray-900 px-4 py-3 rounded-md focus:ring-primary focus:border-primary border-none text-sm flex-1 min-w-0"
                placeholder="Email Address"
                type="email"
              />
              <button className="bg-primary text-white px-5 py-3 rounded-md font-bold hover:bg-opacity-90 transition text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            2021 © QuickHire. All rights reserved.
          </p>
          <div className="flex gap-3">
            {[
              { label: "Facebook", icon: "f" },
              { label: "Instagram", icon: "i" },
              { label: "Twitter", icon: "t" },
              { label: "LinkedIn", icon: "in" },
            ].map(({ label, icon }) => (
              <a
                key={label}
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition text-sm font-medium"
                href="#"
              >
                <span className="sr-only">{label}</span>
                {icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}