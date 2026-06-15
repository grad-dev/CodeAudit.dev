import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

import "./globals.css";
import { ThemeProvider } from "./provider";

// Current Components
import { PersistentBanner as CurrentPersistentBanner } from "@/components/PersistentBanner";
import { WaitlistModal as CurrentWaitlistModal } from "@/components/WaitlistModal";
import CurrentNavbar from "@/components/Navbar";
import CurrentFooter from "@/components/Footer";

// V1 Components
import { PersistentBanner as V1PersistentBanner } from "@/components/v1/PersistentBanner";
import { WaitlistModal as V1WaitlistModal } from "@/components/v1/WaitlistModal";
import V1Navbar from "@/components/v1/Navbar";
import V1Footer from "@/components/v1/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://codeaudit.dev'),
  title: "CodeAudit | Security & Architecture Audits for AI-Generated Code",
  description: "Stop shipping blind. Paste your GitHub repository and receive a detailed security, performance, and architecture audit in minutes.",
  icons: {
    icon: [
      {
        url: "/logo.svg",
        href: "/logo.svg",
      },
    ],
  },
  openGraph: {
    title: "CodeAudit | Security & Architecture Audits for AI-Generated Code",
    description: "Stop shipping blind. Paste your GitHub repository and receive a detailed security, performance, and architecture audit in minutes.",
    images: ["/og-image.png"],
    url: 'https://codeaudit.dev',
    siteName: 'CodeAudit',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeAudit | Security & Architecture Audits for AI-Generated Code",
    description: "Stop shipping blind. Paste your GitHub repository and receive a detailed security, performance, and architecture audit in minutes.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isV1 = process.env.SITE_THEME === "v1";

  const PersistentBanner = isV1 ? V1PersistentBanner : CurrentPersistentBanner;
  const WaitlistModal = isV1 ? V1WaitlistModal : CurrentWaitlistModal;
  const Navbar = isV1 ? V1Navbar : CurrentNavbar;
  const Footer = isV1 ? V1Footer : CurrentFooter;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" sizes="any" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics gaId="G-THYJ0VNJVE" />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <PersistentBanner />
          <Navbar />
          <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#0B57D0] selection:text-white">
            {children}
          </main>
          <Footer />
          <Suspense fallback={null}>
            <WaitlistModal />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
