import "./App.css";
import CallToActionSection from "./components/CallToActionSection/CallToActionSection";
import FeaturedJob from "./components/featuredJobs/FeaturedJobs";
import HeroSection from "./components/HeroSection/HeroSection";
import JobCategory from "./components/jobCategory/JobCategory";
import LatestJob from "./components/latestJob/Latestjob";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import TrustedCompany from "./components/trustedCompany/TrustedCompany";

function App() {
  return (
    <>
      <Navbar />
      <main>
          {/* <!-- Hero Section --> */}
          <HeroSection />
          <TrustedCompany />
          <JobCategory />
          <CallToActionSection />
          <FeaturedJob />
          <LatestJob />
      </main>
      <Footer />
    </>
  );
}

export default App;
