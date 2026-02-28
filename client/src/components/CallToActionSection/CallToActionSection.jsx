import DashBoard from "../../assets/dashboard.png";
import CTA_backgraoud from "../../assets/images/jobcategory/CTA.png";

export default function CallToActionSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div
        className="relative overflow-hidden min-h-[414px] flex flex-col lg:flex-row bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${CTA_backgraoud})` }}
      >
        {/* LEFT CONTENT */}
        <div className="p-8 md:p-12 lg:w-1/2 text-white z-10 text-center lg:text-left">
          <h2 className="text-5xl  font-bold mb-4 leading-snug">
            Start posting <br />
            jobs today
          </h2>

          <p className="text-white/80 mb-8 text-base md:text-lg">
            Start posting jobs for only $10.
          </p>

          <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg w-full sm:w-auto">
            Sign Up For Free
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className=" lg:absolute lg:bottom-0 lg:right-20 lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0 ">
          <img src={DashBoard} alt="Dashboard Preview" className="z-1" />
        </div>

        {/* Decorative Top Shape */}
    
      </div>
      
    </section>
  );
}
