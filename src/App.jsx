import AboutSection from "./components/sections/AboutSection";
import FAQSection from "./components/sections/FAQSection";
import FeatureSection from "./components/sections/FeatureSection";
import HeroSection from "./components/sections/HeroSection";
import MeetingSection from "./components/sections/MeetingSection";
import Navbar from "./components/sections/Navbar";
import PropertySection from "./components/sections/PropertySection";
import TeamSection from "./components/sections/TeamSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/sections/Footer";

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
      <TeamSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
