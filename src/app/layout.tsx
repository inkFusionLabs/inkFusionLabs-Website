import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "InkFusionLabs - Innovative Tech Solutions",
  description: "Crafting innovative tech solutions with precision and passion. Custom web applications, automation tools, and AI-powered solutions by a solo creator.",
  keywords: ["web development", "automation", "AI solutions", "tech consulting", "custom applications"],
  authors: [{ name: "InkFusionLabs" }],
  creator: "InkFusionLabs",
  publisher: "InkFusionLabs",
  robots: "index, follow",
  openGraph: {
    title: "InkFusionLabs - Innovative Tech Solutions",
    description: "Crafting innovative tech solutions with precision and passion. Custom web applications, automation tools, and AI-powered solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "InkFusionLabs - Innovative Tech Solutions",
    description: "Crafting innovative tech solutions with precision and passion.",
  },
  viewport: "width=device-width, initial-scale=1",
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
        {children}
      </body>
    </html>
  );
}
