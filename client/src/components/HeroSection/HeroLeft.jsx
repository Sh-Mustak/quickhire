import VactorImage from "../../assets/Vector.svg";
export default function HeroLeft(){
    return (
        <div className="z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
            Discover
            <br />
            more than
            <br />
            <span className="text-primary ">5000+ Jobs</span>
            <img src={VactorImage} alt="Vector Illustration" className=" w-40 md:w-64 lg:w-80" />
          </h1>
          <p className="text-gray-500 text-lg mb-10 max-w-md">
            Great platform for the job seeker that searching for new career
            heights and passionate about startups.
          </p>
          {/* <!-- Search Bar Container --> */}
          <div className="bg-white p-2 rounded-xl border border-gray-100 shadow-xl max-w-2xl">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex items-center px-4 border-b md:border-b-0 md:border-r border-gray-100">
                <svg
                  className="h-5 w-5 text-gray-400 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                >
                  <path
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                </svg>
                <input
                  className="w-full border-none focus:ring-0 text-sm py-4"
                  placeholder="Job title or keyword"
                  type="text"
                />
              </div>
              <div className="flex-1 flex items-center px-4">
                <svg
                  className="h-5 w-5 text-gray-400 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                >
                  <path
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                </svg>
                <select className="w-full border-none focus:ring-0 text-sm py-4 bg-transparent">
                  <option>Florence, Italy</option>
                  <option>London, UK</option>
                  <option>New York, USA</option>
                </select>
              </div>
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-opacity-90 transition">
                Search my job
              </button>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            Popular : UI Designer, UX Researcher, Android, Admin
          </p>
        </div>
    );
}