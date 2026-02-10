import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — InkFusionLabs",
  description: "InkFusionLabs is a studio building thoughtful apps and modern web experiences. Our story, values, and the kinds of things we like building.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,9,20,0.1),transparent_50%)]" />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-700/50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">InkFusionLabs</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/#work" className="text-sm font-medium text-gray-300 hover:text-red-400 transition-colors">
              Work
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
              A studio that builds digital products with clarity, craft, and momentum.
            </p>
          </header>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Our story</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              InkFusionLabs started with a simple idea: digital products should feel simple, fast, and human. 
              We founded the studio to focus on building apps and websites that people actually enjoy using—without 
              the bloat, complexity, or jargon that so often gets in the way.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We work with startups, product teams, and organisations who want thoughtful design and reliable engineering. 
              Not hype. Not overpromising. Just solid work that ships.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Our values</h2>
            <ul className="space-y-4">
              {[
                "Clarity — We keep things simple. No jargon, no unnecessary complexity.",
                "Craft — Quality matters. We care about details, performance, and reliability.",
                "Momentum — We ship. Iterate fast, learn, and keep moving forward.",
                "Honesty — We say what we mean. No overpromising, no hidden surprises.",
                "Partnership — We work with you, not for you. Collaboration over handoffs.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300">
                  <span className="text-red-400 mt-1">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">What we like building</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We gravitate towards products that solve real problems: habit tools that stick, creative tools that 
              remove friction, platforms that connect people. We enjoy working on MVPs, mobile apps, web apps, 
              and internal tools—anything where design and engineering need to work in lockstep.
            </p>
            <p className="text-gray-300 leading-relaxed">
              If that resonates, we&apos;d be glad to hear from you.
            </p>
          </section>

          <section className="pt-8 border-t border-gray-700/50 flex flex-wrap gap-4">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-red-500 hover:text-red-400 transition-all"
            >
              Explore our work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="mailto:John.Constable@inkfusionlabs.co.uk"
              className="inline-flex items-center gap-2 px-6 py-3 text-gray-400 font-medium hover:text-red-400 transition-colors"
            >
              Get in touch
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
