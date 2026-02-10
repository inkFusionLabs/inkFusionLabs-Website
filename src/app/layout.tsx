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
  title: "InkFusionLabs | Thoughtful Apps & Modern Web Experiences",
  description: "InkFusionLabs is a studio building thoughtful apps and modern web experiences. We design and develop digital products that feel simple, fast, and human.",
  keywords: ["InkFusionLabs", "app development", "website development", "product design", "mobile apps", "web apps", "UK studio"],
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
    title: "InkFusionLabs | Thoughtful Apps & Modern Web Experiences",
    description: "We design and develop digital products that feel simple, fast, and human.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "InkFusionLabs | Thoughtful Apps & Modern Web Experiences",
    description: "We design and develop digital products that feel simple, fast, and human.",
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
