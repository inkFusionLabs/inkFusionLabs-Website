import Link from "next/link";
import { BrandLogo } from "../../components/BrandLogo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LettersBeyond — InkFusionLabs",
  description: "A web tool that helps people write personalised letters using guided prompts. Built by InkFusionLabs.",
};

export default function LettersBeyondPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#0b1220_0%,#0a0f1a_100%)] text-white font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,9,20,0.06),transparent_50%)]" />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b1220]/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <BrandLogo variant="nav" />
          <Link href="/#products" className="text-sm font-medium text-gray-300 hover:text-red-400 transition-colors">
            ← Back to products
          </Link>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-16 px-4 max-w-4xl mx-auto">
        <article>
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 text-amber-400 text-sm rounded-full mb-6">
              <span aria-hidden="true">✉️</span>
              Web app
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              LettersBeyond
            </h1>
            <p className="text-xl text-gray-300">
              A web tool that helps people write personalised letters using guided prompts.
            </p>
          </header>

          {/* Visual placeholder - TODO: Replace with real screenshots */}
          <section className="mb-12">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-amber-900/40 to-amber-800/20 border border-amber-500/20 flex items-center justify-center">
              <span className="text-6xl" aria-hidden="true">✉️</span>
            </div>
            <p className="text-center text-sm text-gray-500 mt-3">App interface placeholder — add real screenshots here</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
            <p className="text-gray-300 leading-relaxed">
              LettersBeyond helps people write personalised letters. Users answer guided prompts about the recipient and occasion, 
              then get a draft they can edit and send. Available at lettersbeyond.co.uk.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Key features</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">—</span>
                Guided prompts for recipient and occasion
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">—</span>
                Personalised draft generation
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">—</span>
                Calm, focused writing experience
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">—</span>
                Structured output for expressive letters
              </li>
            </ul>
          </section>

          <section className="pt-8 border-t border-gray-700/50 flex flex-wrap gap-4">
            <a
              href="https://www.lettersbeyond.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-red-700 transition-all"
            >
              Visit LettersBeyond
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-red-500 hover:text-red-400 transition-all"
            >
              ← Back to products
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
