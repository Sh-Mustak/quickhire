import SearchIcon from "../../assets/SearchIcon.png";
import VactorImage from "../../assets/Vector.svg";
import LoacationIcon from "../../assets/LocationIcon.svg";
export default function HeroLeft(){
    return (
        <div className="z-10  ">
          <h1 className="text-4xl md:text-7xl font-extrabold leading-tight text-[#25324B] mb-6 weight-600 leading-0">
            Discover
            <br />
            more than
            <br />
            <span className="text-blue ">5000+ Jobs</span>
            <img src={VactorImage} alt="Vector Illustration" className=" w-40 md:w-74 lg:w-110" />
          </h1>
          <p className="text-[#515B6F] text-lg mb-10 max-w-md text-justify">
            Great platform for the job seeker that searching for new career heights and passionate about startups.
          </p>
          {/* <!-- Search Bar Container --> */}
          <div className="bg-white p-2 rounded-xl border border-gray-100 shadow-xl max-w-2xl">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex items-center px-4 border-b md:border-b-0 md:border-r border-gray-100">
               <img src={SearchIcon} alt="Search Icon" className="h-3 w-3 mr-2" />
                <input
                  className="w-full border-none focus:ring-0 text-sm p-4 py-1 border-gray-100"
                  placeholder="Job title or keyword"
                  type="text"
                />
              </div>
              <div className="flex-1 flex items-center px-4">
                <img src={LoacationIcon} alt="Location Icon" className="h-3 w-3 mr-2" />
                <select className="w-full border-none focus:ring-0 text-sm py-1 bg-transparent">
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
          <p className="mt-4 text-sm text-[#202430]/70">
            Popular : UI Designer, UX Researcher, Android, Admin
          </p>
        </div>


    );
}