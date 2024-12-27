import AnalysisSection from "@/components/sections/AnalysisSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { RecentAnalysisSection } from "@/components/sections/RecentAnalysisSection";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AnalysisSection />
      <Suspense fallback={<div>Loading...</div>}>
        <RecentAnalysisSection />
      </Suspense>
      <FeaturesSection />
    </div>
  );
}
