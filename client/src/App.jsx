import "./App.css";
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
      </main>
      <Footer />
    </>
  );
}

export default App;
