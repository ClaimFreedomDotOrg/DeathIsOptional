import { Hero } from "@/components/sections/Hero";
import { CausalChain } from "@/components/sections/CausalChain";
import { VideoSection } from "@/components/sections/VideoSection";
import { AudioSection } from "@/components/sections/AudioSection";
import { InfographicsSection } from "@/components/sections/InfographicsSection";
import { SlideshowSection } from "@/components/sections/SlideshowSection";
import { DownloadSection } from "@/components/sections/DownloadSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen text-[#f0ede8]" style={{ background: "#080808" }}>
      <main>
        <Hero />
        <CausalChain />
        <VideoSection />
        <AudioSection />
        <InfographicsSection />
        <SlideshowSection />
        <DownloadSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
