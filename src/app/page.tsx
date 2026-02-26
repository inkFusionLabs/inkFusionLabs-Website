"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BrandLogo } from "./components/BrandLogo";

// Replace with your Formspree form ID from https://formspree.io (e.g. xyzabcde)
const FORMSPREE_FORM_ID = "YOUR_FORM_ID";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [particles, setParticles] = useState<Array<{left: string, top: string, delay: string, duration: string}>>([]);

  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formNeed, setFormNeed] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

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
    { id: "work", label: "Examples" },
    { id: "contact", label: "Contact" },
  ];

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formSubmitting) return;
    setFormSubmitting(true);
    setFormSuccess(false);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formName,
          email: formEmail,
          "What do you need?": formNeed,
          message: formMessage,
          _replyto: formEmail,
          _subject: "Free website review request",
        }),
      });
      if (res.ok) {
        setFormSuccess(true);
        setFormName("");
        setFormEmail("");
        setFormNeed("");
        setFormMessage("");
      } else {
        throw new Error("Submit failed");
      }
    } catch {
      setFormSuccess(false);
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#0b1220_0%,#0a0f1a_100%)] text-white font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,9,20,0.06),transparent_50%)]" />
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
        isScrolled ? "bg-[#0b1220]/95 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}>
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <BrandLogo variant="nav" />
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
          <div className="absolute top-0 right-0 w-64 h-full bg-[#0b1220]/98 backdrop-blur-md border-l border-white/5">
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
          <div className="w-full max-w-4xl flex flex-col items-center">
            <div className="mb-8 flex-shrink-0 animate-slide-up">
              <div className="relative h-20 w-20 md:h-24 md:w-24">
                <Image
                  src="/assets/brand/inkfusionlabs-logo-dark.png"
                  alt="InkFusionLabs logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 80px, 96px"
                />
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 animate-slide-up [animation-delay:100ms]">
                Websites that win trust and bring in enquiries.
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide max-w-2xl animate-slide-up [animation-delay:200ms]">
                Built for self-employed people and small businesses who want to look professional and get more leads.
              </p>
              <p className="text-base md:text-lg text-gray-400 font-light mt-3 max-w-2xl animate-slide-up [animation-delay:300ms]">
                Fast, mobile-first, SEO-ready — designed to convert visitors into customers.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-slide-up [animation-delay:400ms]">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 bg-[#ff1f1f] text-white font-bold rounded-xl hover:bg-[#e01a1a] hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 transition-all duration-200"
              style={{ minHeight: "44px", color: "#ffffff" }}
            >
              Get a free website review
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-red-500 hover:text-red-400 transition-all duration-300 text-center cta-button"
              style={{ minHeight: '44px' }}
            >
              See examples
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center gap-16 w-full max-w-6xl mx-auto px-4 pb-20">
          {/* Who we build for */}
          <section id="who-we-build-for" className="w-full">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-700/50 card-hover">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Who we build for</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Trades & local services", desc: "Clean, fast sites that turn searches into calls." },
                  { title: "Coaches, therapists & consultants", desc: "Credibility-led design with clear enquiry flows." },
                  { title: "Small businesses & startups", desc: "Modern web presence and lightweight tools to grow." },
                ].map((item) => (
                  <div key={item.title} className="p-6 bg-gray-700/50 rounded-xl card-hover">
                    <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* What you get */}
          <section id="what-you-get" className="w-full">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-700/50 card-hover">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you get</h2>
              <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-gray-300">
                {[
                  "Mobile-first design",
                  "Speed & performance optimised",
                  "SEO foundations (titles, metadata, indexing basics)",
                  "Clear calls-to-action + enquiry form",
                  "Analytics setup (basic)",
                  "Secure deployment & maintenance option",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-red-400 mt-1 shrink-0" aria-hidden="true">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Simple packages */}
          <section id="packages" className="w-full">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-700/50 card-hover">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Simple packages</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="p-6 bg-gray-700/50 rounded-xl card-hover">
                  <h3 className="font-semibold text-white mb-2">Starter Site</h3>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>1–5 pages</li>
                    <li>Contact form</li>
                    <li>Mobile-first</li>
                  </ul>
                </div>
                <div className="p-6 bg-gray-700/50 rounded-xl card-hover">
                  <h3 className="font-semibold text-white mb-2">Growth Site</h3>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>Everything in Starter</li>
                    <li>SEO foundations + local SEO basics</li>
                    <li>Extra conversion sections (testimonials, FAQs)</li>
                  </ul>
                </div>
                <div className="p-6 bg-gray-700/50 rounded-xl card-hover">
                  <h3 className="font-semibold text-white mb-2">Care Plan</h3>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>Updates + monitoring</li>
                    <li>Small content changes</li>
                    <li>Security & backups</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-400 text-sm">Not sure what you need? We&apos;ll recommend the right option after a quick chat.</p>
            </div>
          </section>

          {/* Work & proof */}
          <section id="work" className="w-full" aria-labelledby="work-heading">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-700/50 card-hover">
              <h2 id="work-heading" className="text-2xl md:text-3xl font-bold text-white mb-6">Work & proof</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="group rounded-2xl bg-gradient-to-br from-emerald-900/30 via-gray-700/50 to-gray-800/50 p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition-all card-hover flex flex-col">
                  <div className="aspect-video rounded-xl overflow-hidden mb-4 relative bg-gray-800/50">
                    <Image src="/TinySteps.icon/Assets/AppIcon_1024x1024.png" alt="TinySteps NICU Dads — platform for fathers in neonatal care" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">TinySteps NICU Dads</h3>
                  <p className="text-gray-300 text-sm mb-3 flex-1">Built from lived experience. A real-world platform supporting NICU dads — now gaining attention from hospitals and charities.</p>
                  <div className="flex flex-wrap gap-3">
                    <a href="https://tinystepsnicudads.co.uk/" target="_blank" rel="noopener noreferrer" className="text-red-400 text-sm font-medium hover:text-red-300 transition-colors inline-flex items-center gap-1">
                      Visit site
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                    <Link href="/projects/tinysteps" className="text-gray-400 text-sm font-medium hover:text-red-400 transition-colors">
                      Read more
                    </Link>
                  </div>
                </div>

                <div className="group rounded-2xl bg-gradient-to-br from-amber-900/30 via-gray-700/50 to-gray-800/50 p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all card-hover flex flex-col">
                  <div className="aspect-video rounded-xl overflow-hidden mb-4 relative bg-gray-800/50">
                    <Image src="/LettersBeyond.icon/Assets/1024.png" alt="LettersBeyond — grief-focused digital space for remembrance" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">LettersBeyond</h3>
                  <p className="text-gray-300 text-sm mb-3 flex-1">A grief-focused platform built from personal experience, designed for remembrance and support — with interest from bereavement organisations.</p>
                  <div className="flex flex-wrap gap-3">
                    <a href="https://www.lettersbeyond.co.uk/" target="_blank" rel="noopener noreferrer" className="text-red-400 text-sm font-medium hover:text-red-300 transition-colors inline-flex items-center gap-1">
                      Visit site
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                    <Link href="/projects/lettersbeyond" className="text-gray-400 text-sm font-medium hover:text-red-400 transition-colors">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 text-sm mt-6">Alongside public projects, we build commercial websites for self-employed people and small businesses.</p>
            </div>
          </section>

          {/* Why InkFusionLabs */}
          <section id="why-us" className="w-full">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-700/50 card-hover">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why InkFusionLabs</h2>
              <ul className="space-y-3 text-gray-300">
                {[
                  "Built to convert — not just look nice",
                  "Fast, clean, mobile-first builds",
                  "Straightforward process and honest advice",
                  "Founder-led: you work directly with the person building it",
                  "Real products shipped in production",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-red-400 mt-1 shrink-0" aria-hidden="true">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Final CTA */}
          <section id="contact" className="w-full">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-700/50 card-hover">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Want more enquiries from your website?</h2>
              <p className="text-gray-400 mb-8">Send your current site (or your idea) and we&apos;ll suggest the highest-impact improvements.</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ff1f1f] text-white font-bold rounded-xl hover:bg-[#e01a1a] hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 transition-all duration-200"
                  style={{ minHeight: "44px", color: "#ffffff" }}
                >
                  Get a free website review
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="mailto:contact@inkfusionlabs.co.uk"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-red-500 hover:text-red-400 transition-all duration-300 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
                  style={{ minHeight: "44px" }}
                >
                  Email contact@inkfusionlabs.co.uk
                </a>
              </div>

              {/* Contact form */}
              <div id="contact-form" className="rounded-2xl bg-gray-900/80 border border-red-500/30 p-6 md:p-8">
                <h3 className="text-xl font-bold text-white mb-6">Get your free website review</h3>
                {formSuccess ? (
                  <p className="text-gray-300 py-4" role="status">
                    Thanks — I&apos;ll review your site and get back to you within 48 hours.
                  </p>
                ) : (
                  <form onSubmit={handleContactSubmit} className="flex flex-col gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300 mb-1">
                        Name <span className="text-red-400" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Your name"
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email <span className="text-red-400" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="you@example.com"
                        autoComplete="email"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-need" className="block text-sm font-medium text-gray-300 mb-1">
                        What do you need?
                      </label>
                      <select
                        id="contact-need"
                        name="need"
                        value={formNeed}
                        onChange={(e) => setFormNeed(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      >
                        <option value="">Select an option</option>
                        <option value="New website">New website</option>
                        <option value="Website redesign">Website redesign</option>
                        <option value="Speed / SEO improvements">Speed / SEO improvements</option>
                        <option value="Not sure yet">Not sure yet</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300 mb-1">
                        Message <span className="text-red-400" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={4}
                        value={formMessage}
                        onChange={(e) => setFormMessage(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-y min-h-[120px]"
                        placeholder="Tell us about your site or project..."
                        autoComplete="off"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className="px-8 py-4 bg-[#ff1f1f] text-white font-bold rounded-xl hover:bg-[#e01a1a] hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                      style={{ minHeight: "44px", color: "#ffffff" }}
                    >
                      {formSubmitting ? "Sending…" : "Send Request"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="text-center py-10 text-gray-400 text-sm">
          <span>&copy; {new Date().getFullYear()} InkFusionLabs</span>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 mt-3 text-xs">
            <Link href="/privacy" className="hover:text-red-400 transition-colors">Privacy</Link>
            <span className="text-gray-600" aria-hidden="true">·</span>
            <a href="mailto:contact@inkfusionlabs.co.uk" className="hover:text-red-400 transition-colors">contact@inkfusionlabs.co.uk</a>
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
