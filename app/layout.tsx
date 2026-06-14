

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import "./globals.css";
import { ThemeProvider } from "./provider";
import { PersistentBanner } from "@/components/PersistentBanner";
import { WaitlistModal } from "@/components/WaitlistModal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  metadataBase: new URL('https://codeaudit.dev'),
  title: "CodeAudit | Enterprise Code Security & Architecture Review",
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
    title: "CodeAudit | Enterprise Code Security & Architecture Review",
    description: "Stop shipping blind. Paste your GitHub repository and receive a detailed security, performance, and architecture audit in minutes.",
    images: ["/logo.svg"],
    url: 'https://codeaudit.dev',
    siteName: 'CodeAudit',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeAudit | Enterprise Code Security & Architecture Review",
    description: "Stop shipping blind. Paste your GitHub repository and receive a detailed security, performance, and architecture audit in minutes.",
    images: ["/logo.svg"],
    creator: "@codeaudit",
  },
};

import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" sizes="any" />
      </head>
      <body className={inter.className}>
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
