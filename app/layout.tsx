import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Lucidinsurance - AI-Powered Insurance Management Platform
 */
export const metadata: Metadata = {
  title: "Lucidinsurance - AI-Powered Claims Management",
  description: "Streamline your insurance operations with AI-powered claims processing, automated workflows, and intelligent client interactions.",
  keywords: ["insurance", "claims", "AI", "automation", "management", "SaaS"],
};

/**
 * Root layout component with dashboard structure.
 * CUSTOMIZE: Update branding and navigation per client requirements.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-full bg-background font-sans antialiased`}
      >
        <div className="flex h-full flex-col">
          {/* CUSTOMIZE: Update header branding */}
          <Header />

          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar - hidden on mobile */}
            <div className="hidden md:flex">
              <Sidebar />
            </div>

            {/* Main content */}
            <main className="flex-1 overflow-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
