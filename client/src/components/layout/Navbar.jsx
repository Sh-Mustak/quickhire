export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
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
          <span className="text-xl font-bold text-gray-900">QuickHire</span>
        </div>
        {/* <!-- Mobile Menu Icon --> */}
        <div className="md:hidden">
          <button className="p-2 rounded-md text-gray-600 hover:text-primary focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewbox="0 0 24 24"
            >
              <path
                d="M4 6h16M4 12h16m-7 6h7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
            </svg>
          </button>
        </div>
        {/* <!-- Desktop Menu --> */}
        <div className="hidden md:flex items-center gap-8">
          <a className="text-gray-600 hover:text-primary" href="#">
            Find Jobs
          </a>
          <a className="text-gray-600 hover:text-primary" href="#">
            Browse Companies
          </a>
          <div className="flex items-center gap-4">
            <a className="text-primary font-semibold" href="#">
              Login
            </a>
            <a
              className="bg-primary text-white px-5 py-2 rounded-md font-semibold hover:bg-opacity-90 transition"
              href="#"
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
