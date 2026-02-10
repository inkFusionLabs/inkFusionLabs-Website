"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [particles, setParticles] = useState<Array<{left: string, top: string, delay: string, duration: string}>>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 6}s`,
        duration: `${6 + Math.random() * 4}s`
      }))
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
    return () => document.body.classList.remove('mobile-menu-open');
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleMobileNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,9,20,0.1),transparent_50%)]" />
      <div className="particles">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/90 backdrop-blur-md border-b border-gray-700/50" : "bg-transparent"
      }`}>
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">InkFusionLabs</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-red-400 ${
                    activeSection === id ? "text-red-400" : "text-gray-300"
                  }`}
                >
                  {label}
                </button>
              ))}
              <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-red-400 transition-colors">
                About
              </Link>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-300 hover:text-red-400 transition-colors p-2"
                aria-label="Open mobile menu"
                style={{ minWidth: '44px', minHeight: '44px' }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute top-0 right-0 w-64 h-full bg-gray-900/95 backdrop-blur-md border-l border-gray-700/50">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
                <span className="text-lg font-bold text-white">Menu</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-red-400 transition-colors p-2" aria-label="Close menu" style={{ minWidth: '44px', minHeight: '44px' }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="flex-1 p-4 space-y-2">
                {navItems.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => handleMobileNavClick(id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 hover:bg-gray-700/50 ${activeSection === id ? "bg-red-500/20 text-red-400" : "text-gray-300 hover:text-white"}`}
                    style={{ minHeight: '44px' }}
                  >
                    {label}
                  </button>
                ))}
                <Link href="/about" className="block w-full text-left px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all" style={{ minHeight: '44px' }}>
                  About
                </Link>
              </nav>
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Hero */}
        <header id="home" className="flex flex-col items-center pt-32 pb-16 px-4 animate-fade-in">
          <div className="relative group mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:shadow-red-500/25 card-hover">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white text-center mb-4 animate-slide-up">
            InkFusionLabs builds thoughtful apps and modern web experiences.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide text-center max-w-2xl animate-slide-up [animation-delay:200ms]">
            We design and develop digital products that feel simple, fast, and human.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-slide-up [animation-delay:400ms]">
            <button
              onClick={() => scrollToSection("work")}
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-red-500/25 cta-button"
              style={{ minHeight: '44px' }}
            >
              Explore our work
            </button>
            <Link
              href="/about"
              className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-red-500 hover:text-red-400 transition-all duration-300 text-center cta-button"
              style={{ minHeight: '44px' }}
            >
              About InkFusionLabs
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center gap-16 w-full max-w-6xl mx-auto px-4 pb-20">
          {/* What we build */}
          <section id="what-we-build" className="w-full">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-700/50 card-hover">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build</h2>
              <p className="text-gray-300 mb-8 max-w-2xl">Apps, websites, and products that solve real problems and feel right to use.</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Mobile apps", desc: "Native and cross-platform apps that users love." },
                  { title: "Websites & platforms", desc: "Web experiences built for clarity and conversion." },
                  { title: "Product design & UX", desc: "User-centred design that makes products feel right." },
                  { title: "Prototypes & MVPs", desc: "Lean, fast builds to validate and iterate." },
                ].map((item) => (
                  <div key={item.title} className="p-5 bg-gray-700/50 rounded-xl card-hover">
                    <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Our approach */}
          <section id="approach" className="w-full">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-700/50 card-hover">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our approach</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Clarity", desc: "Simple UX. Clear scope. No jargon, no surprises." },
                  { title: "Craft", desc: "Quality UI and reliable engineering. We care about the details." },
                  { title: "Momentum", desc: "Iterate fast, ship often. We keep things moving." },
                ].map((item) => (
                  <div key={item.title} className="p-6 bg-gray-700/50 rounded-xl card-hover">
                    <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Featured work */}
          <section id="work" className="w-full">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-700/50 card-hover">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Featured work</h2>
              <p className="text-gray-400 mb-8">A selection of products we&apos;ve designed and built.</p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* TinySteps */}
                <div className="group rounded-2xl bg-gradient-to-br from-emerald-900/30 via-gray-700/50 to-gray-800/50 p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition-all card-hover flex flex-col">
                  <div className="aspect-video rounded-xl overflow-hidden mb-4 relative bg-gray-800/50">
                    <Image src="/TinySteps.icon/Assets/AppIcon_1024x1024.png" alt="TinySteps — a supportive digital platform for NICU dads" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">TinySteps</h3>
                  <p className="text-gray-300 text-sm mb-4 flex-1">A supportive digital platform designed to help NICU dads track progress, reflect, and stay connected during an intense and emotional journey.</p>
                  <div className="flex flex-wrap gap-3">
                    <a href="https://tinystepsnicudads.co.uk/" target="_blank" rel="noopener noreferrer" className="text-red-400 text-sm font-medium hover:text-red-300 transition-colors inline-flex items-center gap-1">
                      Visit TinySteps
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                    <Link href="/projects/tinysteps" className="text-gray-400 text-sm font-medium hover:text-red-400 transition-colors">
                      Read more
                    </Link>
                  </div>
                </div>

                {/* LettersBeyond */}
                <div className="group rounded-2xl bg-gradient-to-br from-amber-900/30 via-gray-700/50 to-gray-800/50 p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all card-hover flex flex-col">
                  <div className="aspect-video rounded-xl overflow-hidden mb-4 relative bg-gray-800/50">
                    <Image src="/LettersBeyond.icon/Assets/1024.png" alt="LettersBeyond — a creative web platform for personalised letters" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">LettersBeyond</h3>
                  <p className="text-gray-300 text-sm mb-4 flex-1">A creative web platform that helps people craft thoughtful, personalised letters through guided prompts and structured flow.</p>
                  <div className="flex flex-wrap gap-3">
                    <a href="https://www.lettersbeyond.co.uk/" target="_blank" rel="noopener noreferrer" className="text-red-400 text-sm font-medium hover:text-red-300 transition-colors inline-flex items-center gap-1">
                      Visit LettersBeyond
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                    <Link href="/projects/lettersbeyond" className="text-gray-400 text-sm font-medium hover:text-red-400 transition-colors">
                      Read more
                    </Link>
                  </div>
                </div>

                {/* OmniFusion Music */}
                <div className="rounded-2xl bg-gradient-to-br from-purple-900/30 via-gray-700/50 to-gray-800/50 p-6 border border-purple-500/20 card-hover">
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-purple-800/40 to-purple-900/30 mb-4 flex items-center justify-center" aria-hidden="true">
                    <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">OmniFusion Music</h3>
                  <p className="text-gray-300 text-sm">A real-time music request system for DJs and events. Mobile-friendly guest form and dashboard with multi-DJ support.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="w-full">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-700/50 card-hover">
              <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
              <p className="text-gray-300 mb-6 max-w-xl">
                Interested in what we do? We&apos;re happy to chat about projects, ideas, or collaboration.
              </p>
              <a
                href="mailto:John.Constable@inkfusionlabs.co.uk"
                className="inline-flex items-center gap-2 text-red-400 font-medium hover:text-red-300 transition-colors"
              >
                John.Constable@inkfusionlabs.co.uk
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="text-center py-10 text-gray-400 text-sm">
          <span>&copy; {new Date().getFullYear()} InkFusionLabs</span>
          <div className="flex items-center justify-center gap-4 mt-3 text-xs">
            <Link href="/privacy" className="hover:text-red-400 transition-colors">Privacy</Link>
            <span className="text-gray-600">·</span>
            <a href="mailto:John.Constable@inkfusionlabs.co.uk" className="hover:text-red-400 transition-colors">Contact</a>
          </div>
        </footer>
      </div>

      <button
        onClick={scrollToTop}
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        aria-label="Scroll to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}
