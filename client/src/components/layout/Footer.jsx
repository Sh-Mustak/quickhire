export default function Footer() {
  return (
    <footer className="bg-[#1A1C21] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <span className="text-2xl font-bold">QuickHire</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">About</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a className="hover:text-white transition" href="#">
                  Companies
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#">
                  Terms
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#">
                  Advice
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a className="hover:text-white transition" href="#">
                  Help Docs
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#">
                  Guide
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#">
                  Updates
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Get job notifications</h4>
            <p className="text-gray-400 mb-6">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                className="bg-white text-gray-900 px-4 py-3 rounded-md focus:ring-primary focus:border-primary border-none grow"
                placeholder="Email Address"
                type="email"
              />
              <button className="bg-primary text-white px-6 py-3 rounded-md font-bold hover:bg-opacity-90 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm">
            2021 © QuickHire. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition"
              href="#"
            >
              <span className="sr-only">Facebook</span>f
            </a>
            <a
              className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition"
              href="#"
            >
              <span className="sr-only">Instagram</span>i
            </a>
            <a
              className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition"
              href="#"
            >
              <span className="sr-only">Twitter</span>t
            </a>
            <a
              className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition"
              href="#"
            >
              <span className="sr-only">LinkedIn</span>in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
