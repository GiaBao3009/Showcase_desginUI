import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { FeaturedHonoree } from "./components/FeaturedHonoree";
import { HallOfFame } from "./components/HallOfFame";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { TimelineSection } from "./components/TimelineSection";
import { NominationSection } from "./components/NominationSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: "#050d1f", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <Navbar />
      <HeroSection />
      <FeaturedHonoree />
      <HallOfFame />
      <TestimonialsSection />
      <TimelineSection />
      <NominationSection />
      <Footer />
    </div>
  );
}
