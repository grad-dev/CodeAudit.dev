import React from "react";
import HeroSection from "@/components/HeroSection";
import Approach from "@/components/Approach";
import TechStack from "@/components/TechStack";
import RecentWork from "@/components/RecentWork";
import RecentProjects from "@/components/RecentProjects";
import DifferentApproach from "@/components/DifferentApproach";
import Clients from "@/components/Clients";
import FAQ from "@/components/FAQ";
import SocialProof from "@/components/SocialProof";
import V1LandingPage from "@/components/v1/V1LandingPage";

function CurrentLandingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#0B57D0] selection:text-white">
      <div className="relative">
        <HeroSection />
        <Approach />
        <TechStack />
        <RecentWork />
        <RecentProjects />
        <DifferentApproach />
        <Clients />
        <FAQ />
        <SocialProof />
      </div>
    </main>
  );
}

export default function Page() {
  if (process.env.SITE_THEME === "v1") {
    return <V1LandingPage />;
  }
  return <CurrentLandingPage />;
}
