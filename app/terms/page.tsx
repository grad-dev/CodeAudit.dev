import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#0B57D0] selection:text-white">
      <Navbar />
      
      <div className="pt-40 pb-24 px-4 md:px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Terms of Service</h1>
        
        <div className="prose prose-gray max-w-none text-gray-600 space-y-6">
          <p className="text-lg">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Agreement to Terms</h2>
          <p>
            By accessing or using our website and services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Intellectual Property</h2>
          <p>
            The service and its original content, features, and functionality are and will remain the exclusive property of Monk Studio and its licensors. Upon full payment for our development services, intellectual property rights for the specific project codebase are transferred to the client as outlined in the individual service agreement.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Termination</h2>
          <p>
            We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which Monk Studio operates, without regard to its conflict of law provisions.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
