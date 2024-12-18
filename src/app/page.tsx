import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { RecentAnalysisSection } from "@/components/sections/RecentAnalysisSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <RecentAnalysisSection />
      <FeaturesSection />
    </div>
  );
}
