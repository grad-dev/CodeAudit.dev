import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProof from "@/components/SocialProof";
import WhyMvpsFail from "@/components/WhyMvpsFail";
import DifferentApproach from "@/components/DifferentApproach";
import TechStack from "@/components/TechStack";
import RecentWork from "@/components/RecentWork";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function RedesignedLandingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#0B57D0] selection:text-white">
      <Navbar />
      
      <div className="relative">
        <HeroSection />
        <SocialProof />
        <WhyMvpsFail />
        <DifferentApproach />
        <TechStack />
        <RecentWork />
        <Testimonials />
        <FAQ />
        <CTA />
      </div>

      <Footer />
    </main>
  );
}
