import Link from "next/link";
import { BrandLogo } from "../components/BrandLogo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — InkFusionLabs",
  description: "Founder-led studio building websites for self-employed people and small businesses. Fast, mobile-first, built to win trust and bring in enquiries.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#0b1220_0%,#0a0f1a_100%)] text-white font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,9,20,0.06),transparent_50%)]" />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b1220]/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <BrandLogo variant="nav" />
          <div className="flex items-center gap-6">
            <Link href="/#work" className="text-sm font-medium text-gray-300 hover:text-red-400 transition-colors">
              Examples
            </Link>
            <Link href="/#contact" className="text-sm font-medium text-gray-300 hover:text-red-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-16 px-4 max-w-4xl mx-auto">
        <article>
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              About InkFusionLabs
            </h1>
            <p className="text-xl text-gray-300">
              Founder-led studio building websites that win trust and bring in enquiries.
            </p>
          </header>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">What we do</h2>
            <p className="text-gray-300 leading-relaxed">
              We build websites for self-employed people and small businesses — fast, mobile-first, and designed to convert visitors into customers. 
              We also ship our own products (TinySteps, LettersBeyond) from idea to production, and use that experience to build real, reliable sites for clients.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">How we work</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We handle design and development. No separate teams. We keep things simple and focus on what the product needs.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We build in stages, test as we go, and improve after launch.
            </p>
          </section>

          <section className="pt-8 border-t border-gray-700/50 flex flex-wrap gap-4">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-red-500 hover:text-red-400 transition-all"
            >
              View our work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="mailto:contact@inkfusionlabs.co.uk?subject=Free%20website%20review"
              className="inline-flex items-center gap-2 px-6 py-3 text-gray-400 font-medium hover:text-red-400 transition-colors"
            >
              Get a free website review
            </a>
          </section>
        </article>
      </main>

      <footer className="text-center py-8 text-gray-400 text-sm">
        <span>&copy; {new Date().getFullYear()} InkFusionLabs</span>
      </footer>
    </div>
  );
}
