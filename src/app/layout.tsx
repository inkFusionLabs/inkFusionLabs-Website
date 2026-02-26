import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";
import PWAInstallPrompt from "./components/PWAInstallPrompt";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "InkFusionLabs — Mission-Driven Platform Studio",
  description: "We build meaningful digital platforms for charities, communities, and ambitious early-stage companies. Production-ready products — not brochure sites.",
  keywords: ["InkFusionLabs", "platform studio", "charity digital", "startup MVP", "digital products", "UK studio", "founder-led"],
  authors: [{ name: "InkFusionLabs" }],
  creator: "InkFusionLabs",
  publisher: "InkFusionLabs",
  robots: "index, follow",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "InkFusionLabs",
  },
  openGraph: {
    title: "InkFusionLabs — Mission-Driven Platform Studio",
    description: "We build meaningful digital platforms for charities, communities, and ambitious early-stage companies. Production-ready products — not brochure sites.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "InkFusionLabs — Mission-Driven Platform Studio",
    description: "We build meaningful digital platforms for charities, communities, and ambitious early-stage companies. Production-ready products — not brochure sites.",
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
    <html lang="en-GB" className="scroll-smooth">
      <head>
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        <GoogleAnalytics />
        <PWAInstallPrompt />
        {children}
      </body>
    </html>
  );
}
