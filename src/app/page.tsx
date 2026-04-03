import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import OldCodeSection from "@/components/OldCodeSection";
import IntelligenceSection from "@/components/IntelligenceSection";
import RIFeaturesSection from "@/components/RIFeaturesSection";
import VideoSection from "@/components/VideoSection";
import AnnaSection from "@/components/AnnaSection";
import DNASection from "@/components/DNASection";
import ArchetypesSection from "@/components/ArchetypesSection";
import UnitySection from "@/components/UnitySection";
import ProgramsSection from "@/components/ProgramsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <OldCodeSection />
      <div className="s4s5-wrapper">
        <IntelligenceSection />
        <RIFeaturesSection />
      </div>
      <VideoSection />
      <AnnaSection />
      <DNASection />
      <ArchetypesSection />
      <UnitySection />
      <ProgramsSection />
      <Footer />
    </main>
  );
}
