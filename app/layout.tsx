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
 * Lucid - AI-Powered Advertising Management Platform
 */
export const metadata: Metadata = {
  title: "Lucid - AI-Powered Advertising Dashboard",
  description: "Unified advertising management platform with AI-powered insights. Track campaigns across Meta, Google, TikTok, and YouTube from a single dashboard.",
  keywords: ["advertising", "ads", "AI", "marketing", "Meta", "Google Ads", "TikTok", "analytics", "SaaS"],
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
