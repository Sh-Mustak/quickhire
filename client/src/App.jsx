import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
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
      </main>
      <Footer />
    </>
  );
}

export default App;
