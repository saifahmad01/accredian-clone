import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/components/lib/constants";
import "./globals.css";

/* ---------------- Fonts ---------------- */

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/* ---------------- Metadata ---------------- */

const title = `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`;

export const metadata: Metadata = {
  title,
  description: SITE_CONFIG.description,

  openGraph: {
    title,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title,
    description: SITE_CONFIG.description,
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* ---------------- Viewport ---------------- */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

/* ---------------- Layout ---------------- */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className="flex min-h-screen flex-col bg-white text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
        
        {/* Top Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="flex flex-1 flex-col">
          {children}
        </main>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}