import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "InkFusionLabs - Freelance Tech Solutions",
  description: "Available for hire! Crafting innovative tech solutions with precision and passion. Custom web applications, iOS development, automation tools, and AI-powered solutions by a solo creator.",
  keywords: ["freelance", "web development", "iOS development", "Swift", "automation", "AI solutions", "tech consulting", "custom applications", "hire developer"],
  authors: [{ name: "InkFusionLabs" }],
  creator: "InkFusionLabs",
  publisher: "InkFusionLabs",
  robots: "index, follow",
  openGraph: {
    title: "InkFusionLabs - Freelance Tech Solutions",
    description: "Available for hire! Crafting innovative tech solutions with precision and passion. Custom web applications, iOS development, automation tools, and AI-powered solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "InkFusionLabs - Freelance Tech Solutions",
    description: "Available for hire! Crafting innovative tech solutions with precision and passion. Web & iOS development.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#e50914",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased`}
      >
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
