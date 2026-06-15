import React from "react";
import HeroSection from "@/components/v1/HeroSection";
import Approach from "@/components/v1/Approach";
import TechStack from "@/components/v1/TechStack";
import RecentWork from "@/components/v1/RecentWork";
import RecentProjects from "@/components/v1/RecentProjects";
import DifferentApproach from "@/components/v1/DifferentApproach";
import Clients from "@/components/v1/Clients";
import FAQ from "@/components/v1/FAQ";
import SocialProof from "@/components/v1/SocialProof";

export default function V1LandingPage() {
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
