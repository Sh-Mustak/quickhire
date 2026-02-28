import DashBoard from "../../assets/dashboard.png";
import CTA_background from "../../assets/images/jobcategory/CTA.png";

export default function CallToActionSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div
        className="relative overflow-hidden rounded-2xl flex flex-col lg:flex-row bg-cover bg-center min-h-[414px]"
        style={{ backgroundImage: `url(${CTA_background})` }}
      >
        {/* LEFT CONTENT — centered on mobile/tablet, left-aligned on desktop */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left px-8 pt-12 pb-6 lg:py-12 lg:pl-12 lg:w-1/2 z-10 text-white">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Start posting <br /> jobs today
          </h2>

          <p className="text-white/80 mb-8 text-base sm:text-lg">
            Start posting jobs for only $10.
          </p>

          {/* Button: full-width with max cap on mobile/tablet */}
          <button className="bg-white text-indigo-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg w-full sm:w-80 lg:w-auto">
            Sign Up For Free
          </button>
        </div>

        {/* RIGHT IMAGE — centered below text on mobile/tablet, absolute on desktop */}
        <div className="flex justify-center items-end px-4 pb-0 mt-4 lg:mt-0 lg:absolute lg:bottom-0 lg:right-16 lg:w-[48%]">
          <img
            src={DashBoard}
            alt="Dashboard Preview"
            className="w-full max-w-sm lg:max-w-none rounded-t-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}