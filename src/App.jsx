import AboutSection from "./components/AboutSection";
import FAQSection from "./components/FAQSection";
import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import MeetingSection from "./components/MeetingSection";
import Navbar from "./components/Navbar";
import PropertySection from "./components/PropertySection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <PropertySection />
      <AboutSection />
      <MeetingSection />
      <FAQSection />
    </>
  );
}

export default App;
