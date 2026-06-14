import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#0B57D0] selection:text-white">
      <Navbar />
      
      <div className="pt-40 pb-24 px-4 md:px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Privacy Policy</h1>
        
        <div className="prose prose-gray max-w-none text-gray-600 space-y-6">
          <p className="text-lg">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us when you use our website, including when you fill out our contact form to schedule a strategy call. This may include your name, email address, mobile number, and project details.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. How We Use Your Information</h2>
          <p>
            We use the information we collect primarily to communicate with you about your project, provide our services, and improve our website. We do not sell or share your personal information with third parties for their direct marketing purposes.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at our provided contact methods on the website.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
