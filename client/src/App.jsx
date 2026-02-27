import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
          {/* <!-- Hero Section --> */}
          <HeroSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
