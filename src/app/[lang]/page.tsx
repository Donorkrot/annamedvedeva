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
import { HomeJsonLd } from "@/components/JsonLd";
import type { Lang } from "@/lib/translations";

export default function Home({ params }: { params: { lang: Lang } }) {
  return (
    <main className="home">
      {/* JSON-LD: Organization + Person + WebSite для Google knowledge panel */}
      <HomeJsonLd lang={params.lang} />
      <HeroSection />
      <ProblemSection />
      <OldCodeSection />
      <div className="s4s5s6-wrapper">
        <IntelligenceSection />
        <RIFeaturesSection />
        <VideoSection />
      </div>
      <AnnaSection />
      <DNASection />
      <ArchetypesSection />
      <UnitySection />
      <ProgramsSection />
      <Footer />
    </main>
  );
}
