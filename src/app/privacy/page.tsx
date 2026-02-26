"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BrandLogo } from "../components/BrandLogo";

export default function PrivacyPolicy() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#0b1220_0%,#0a0f1a_100%)] text-white font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,9,20,0.06),transparent_50%)]" />
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0b1220]/95 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}>
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <BrandLogo variant="nav" />
            <div className="flex items-center gap-4">
              <Link 
                href="/"
                className="text-sm font-medium text-gray-300 hover:text-red-400 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex flex-col items-center pt-32 pb-12 px-4">
          <div className="relative group mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:shadow-red-500/25">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight gradient-text mb-4">
            Privacy Policy
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 font-light tracking-wide text-center max-w-2xl">
            How we collect, use, and protect your information - Updated
          </p>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center gap-8 w-full max-w-4xl mx-auto px-4 pb-16">
          <div className="w-full">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
              
              {/* Last Updated */}
              <div className="text-center mb-8">
                <p className="text-gray-400 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
              </div>

              {/* Introduction */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
                <p className="text-gray-300 leading-relaxed">
                  InkFusionLabs (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website, contact us, or use our services.
                </p>
              </section>

              {/* Information We Collect */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-700/50 rounded-xl">
                    <h3 className="text-lg font-semibold text-white mb-2">Contact Information</h3>
                    <p className="text-gray-300 text-sm">
                      When you contact us through our website, social media, or email, we may collect:
                    </p>
                    <ul className="text-gray-300 text-sm mt-2 ml-4 space-y-1">
                      <li>• Name and email address</li>
                      <li>• Phone number (if provided)</li>
                      <li>• Company information (if applicable)</li>
                      <li>• Project details and requirements</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-gray-700/50 rounded-xl">
                    <h3 className="text-lg font-semibold text-white mb-2">Website Usage Data</h3>
                    <p className="text-gray-300 text-sm">
                      We may collect anonymous usage data including:
                    </p>
                    <ul className="text-gray-300 text-sm mt-2 ml-4 space-y-1">
                      <li>• Pages visited and time spent</li>
                      <li>• Browser type and device information</li>
                      <li>• Referring website (if applicable)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How We Use Information */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-700/50 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-white">Communication</h3>
                    </div>
                    <p className="text-gray-300 text-sm">
                      To respond to your inquiries, provide project updates, and maintain ongoing communication.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-700/50 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-white">Service Delivery</h3>
                    </div>
                    <p className="text-gray-300 text-sm">
                      To provide our development services, create project proposals, and deliver completed work.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-700/50 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-white">Improvement</h3>
                    </div>
                    <p className="text-gray-300 text-sm">
                      To improve our services, website functionality, and user experience.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-700/50 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-white">Security</h3>
                    </div>
                    <p className="text-gray-300 text-sm">
                      To protect against fraud, abuse, and ensure the security of our services.
                    </p>
                  </div>
                </div>
              </section>

              {/* Data Protection */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Data Protection</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-700/50 rounded-xl">
                    <h3 className="text-lg font-semibold text-white mb-2">Security Measures</h3>
                    <p className="text-gray-300 text-sm mb-3">
                      We implement appropriate security measures to protect your personal information:
                    </p>
                    <ul className="text-gray-300 text-sm ml-4 space-y-1">
                      <li>• Secure data transmission using encryption</li>
                      <li>• Limited access to personal information</li>
                      <li>• Regular security assessments</li>
                      <li>• Secure storage practices</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-gray-700/50 rounded-xl">
                    <h3 className="text-lg font-semibold text-white mb-2">Data Retention</h3>
                    <p className="text-gray-300 text-sm">
                      We retain your personal information only as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-700/50 rounded-xl">
                    <h3 className="text-lg font-semibold text-white mb-2">No Sale of Data</h3>
                    <p className="text-gray-300 text-sm">
                      We do not sell, trade, or otherwise transfer your personal information to third parties for marketing purposes.
                    </p>
                  </div>
                </div>
              </section>

              {/* Your Rights */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-700/50 rounded-xl">
                    <h3 className="text-lg font-semibold text-white mb-2">Access & Control</h3>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Request access to your data</li>
                      <li>• Request correction of your data</li>
                      <li>• Request deletion of your data</li>
                      <li>• Opt out of communications</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-gray-700/50 rounded-xl">
                    <h3 className="text-lg font-semibold text-white mb-2">GDPR Compliance</h3>
                    <p className="text-gray-300 text-sm">
                      If you are in the European Union, you have additional rights under GDPR including the right to data portability and the right to lodge a complaint with supervisory authorities.
                    </p>
                  </div>
                </div>
              </section>

              {/* Third-Party Services */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We may use third-party services that collect, monitor, and analyze data. These services have their own privacy policies:
                </p>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-700/50 rounded-lg">
                    <h3 className="font-semibold text-white text-sm">Google Analytics</h3>
                    <p className="text-gray-400 text-xs">Website analytics and usage tracking</p>
                  </div>
                  <div className="p-3 bg-gray-700/50 rounded-lg">
                    <h3 className="font-semibold text-white text-sm">Vercel</h3>
                    <p className="text-gray-400 text-xs">Website hosting and performance monitoring</p>
                  </div>
                  <div className="p-3 bg-gray-700/50 rounded-lg">
                    <h3 className="font-semibold text-white text-sm">Email Services</h3>
                    <p className="text-gray-400 text-xs">Email communication and storage</p>
                  </div>
                </div>
              </section>

              {/* Contact Information */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <div className="p-6 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-2xl border border-gray-600/50">
                  <p className="text-gray-300 mb-4">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href="mailto:contact@inkfusionlabs.co.uk" className="text-red-400 hover:text-red-300 transition-colors">contact@inkfusionlabs.co.uk</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-white">Remote • Worldwide</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Updates */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              {/* Back to Home */}
              <div className="text-center pt-8">
                <Link 
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/25"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center py-8 text-gray-400 text-sm">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-1 h-1 bg-red-500 rounded-full"></div>
            <span>&copy; {new Date().getFullYear()} InkFusionLabs</span>
            <div className="w-1 h-1 bg-red-500 rounded-full"></div>
          </div>
          <p className="text-xs text-gray-500">Protecting your privacy is our priority</p>
        </footer>
      </div>
    </div>
  );
} 