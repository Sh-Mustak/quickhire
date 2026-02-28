import "./App.css";
import CallToActionSection from "./components/CallToActionSection/CallToActionSection";
import HeroSection from "./components/HeroSection/HeroSection";
import JobCategory from "./components/jobCategory/JobCategory";
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
      </main>
      <Footer />
    </>
  );
}

export default App;
